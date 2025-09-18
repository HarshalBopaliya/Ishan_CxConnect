import React, { useState, useRef, useEffect } from 'react';
import IshanIcon from "../icons"
interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  placeholder = 'Select an option',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const selectedOption = options.find(option => option.value === value);
  const normalizedQuery = searchTerm.trim().toLowerCase();
  const filteredOptions = normalizedQuery
    ? options.filter(option => option.label.toLowerCase().includes(normalizedQuery))
    : options;
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
        setSearchTerm('');
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  useEffect(() => {
    
    if (isOpen) {
      setFocusedIndex(filteredOptions.length > 0 ? 0 : -1);
    }
  }, [searchTerm, isOpen, filteredOptions.length]);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
          onChange(filteredOptions[focusedIndex].value);
          setIsOpen(false);
          setFocusedIndex(-1);
          setSearchTerm('');
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => 
            filteredOptions.length === 0
              ? -1
              : prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => 
            filteredOptions.length === 0
              ? -1
              : prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
        setSearchTerm('');
        break;
    }
  };
  
  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setFocusedIndex(-1);
    setSearchTerm('');
    buttonRef.current?.focus();
  };
  
  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`w-full px-3 py-2 text-left border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${
          disabled ? 'border-gray-200 text-gray-400' : 'border-gray-300 hover:border-gray-400 text-gray-900'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <IshanIcon variant='chevronDown' className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          <div className="sticky top-0 bg-white px-3 pt-2 pb-2 border-b border-gray-200">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setFocusedIndex(prev => 
                    filteredOptions.length === 0
                      ? -1
                      : prev < filteredOptions.length - 1 ? prev + 1 : 0
                  );
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  setFocusedIndex(prev => 
                    filteredOptions.length === 0
                      ? -1
                      : prev > 0 ? prev - 1 : filteredOptions.length - 1
                  );
                } else if (e.key === 'Enter') {
                  if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
                    e.preventDefault();
                    handleOptionClick(filteredOptions[focusedIndex].value);
                  }
                } else if (e.key === 'Escape') {
                  setIsOpen(false);
                  setFocusedIndex(-1);
                  setSearchTerm('');
                  buttonRef.current?.focus();
                }
              }}
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
            />
          </div>
          <ul role="listbox" className="py-1">
            {filteredOptions.length === 0 && (
              <li className="px-3 py-2 text-gray-500">No results</li>
            )}
            {filteredOptions.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                onClick={() => handleOptionClick(option.value)}
                className={`px-3 py-2 cursor-pointer transition-colors duration-150 ${
                  focusedIndex === index
                    ? 'bg-blue-100 text-blue-900'
                    : option.value === value
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;