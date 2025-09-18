import React, { useEffect, useMemo, useRef, useState } from 'react';
import IshanIcon from "../icons";

interface MultiSelectOption {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  options: MultiSelectOption[];
  values: string[];
  onChange: (values: string[]) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  values,
  onChange,
  disabled = false,
  placeholder = 'Select option(s)',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const valueSet = useMemo(() => new Set(values), [values]);
  const allOptionValues = useMemo(() => options.map(o => o.value), [options]);
  const areAllSelected = values.length > 0 && values.length === options.length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleValue = (next: string) => {
    if (valueSet.has(next)) {
      onChange(values.filter(v => v !== next));
    } else {
      onChange([...values, next]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    switch (e.key) {
      case 'Enter':
      case ' ': {
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          toggleValue(options[focusedIndex].value);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => (prev < options.length - 1 ? prev + 1 : 0));
        }
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex(prev => (prev > 0 ? prev - 1 : options.length - 1));
        }
        break;
      }
      case 'Escape': {
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
        break;
      }
    }
  };

  const removeChip = (valueToRemove: string) => {
    onChange(values.filter(v => v !== valueToRemove));
  };

  const selectedOptions = useMemo(
    () => options.filter(o => valueSet.has(o.value)),
    [options, valueSet]
  );

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`w-full min-h-[40px] pl-3 pr-12 py-2 text-left border rounded-lg transition-colors duration-200 focus:outline-none  disabled:bg-gray-100 disabled:cursor-not-allowed ${
          disabled ? 'border-gray-200 text-gray-400' : 'border-gray-300 hover:border-gray-400 text-gray-900'
        }`}
      >
        <div className="flex flex-wrap gap-2">
          {selectedOptions.length === 0 ? (
            <span className="text-gray-500">{placeholder}</span>
          ) : (
            selectedOptions.map(opt => (
              <span
                key={opt.value}
                className="inline-flex items-center gap-1 max-w-full truncate rounded-full bg-gray-50 text-gray-700 border border-gray-200 px-2 py-0.5 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="truncate">{opt.label}</span>
                <button
                  type="button"
                  className="rounded-full hover:bg-gray-100 p-0.5"
                  aria-label={`Remove ${opt.label}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeChip(opt.value);
                  }}
                >
                  {/* Using remove icon as close */}
                  <IshanIcon variant='X' className='h-3 w-3 text-gray-500' />
                </button>
              </span>
            ))
          )}
        </div>
        {selectedOptions.length > 0 && (
          <button
            type="button"
            aria-label="Clear all"
            className="absolute right-8 top-1/2 -translate-y-1/2 rounded hover:bg-gray-100 p-1"
            onClick={(e) => {
              e.stopPropagation();
              onChange([]);
            }}
          >
            <IshanIcon variant='X' className='h-4 w-4 text-gray-500' />
          </button>
        )}
        <IshanIcon variant='chevronDown' className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          <div className="sticky top-0 bg-white px-3 py-2 border-b border-gray-200 flex items-center justify-between">
            <button
              type="button"
              className="text-sm font-medium text-gray-600 hover:text-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                onChange(allOptionValues);
              }}
            >
              {areAllSelected ? 'All selected' : 'Select all'}
            </button>
            {values.length > 0 && (
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-gray-800"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange([]);
                }}
              >
                Clear
              </button>
            )}
          </div>
          <ul role="listbox" className="py-1">
            {options.map((option, index) => {
              const isSelected = valueSet.has(option.value);
              const isFocused = focusedIndex === index;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setFocusedIndex(index)}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleValue(option.value);
                  }}
                  className={`px-3 py-2 cursor-pointer transition-colors duration-150 flex items-center justify-between ${
                    isFocused
                      ? 'bg-gray-100 text-gray-900'
                      : isSelected
                      ? 'bg-gray-50 text-blue-700'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <span className="ml-2 inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;


