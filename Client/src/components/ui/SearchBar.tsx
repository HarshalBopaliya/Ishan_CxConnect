import React from "react";
import IshanIcon from "../icons";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  className = "",
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
  };

  const handleClearClick = () => {
    const syntheticEvent = {
      target: {
        value: "",
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  };

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <span></span>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg 
            text-gray-900 placeholder-gray-500 transition-colors duration-200 
            focus:outline-none 
            focus:border-blue-500 hover:border-gray-400"
          aria-label="Search"
        />
        <button
          onClick={handleSearchClick}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 
            text-gray-400 hover:text-gray-600 transition-colors duration-200 
            focus:outline-none"
          aria-label="Search button"
        >
          <IshanIcon variant="search" />
        </button>
        {value && (
          <button
            onClick={handleClearClick}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 
              text-gray-400 hover:text-gray-600 transition-colors duration-200 
              focus:outline-none"
            aria-label="Clear search"
          >
            <IshanIcon variant="X" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;