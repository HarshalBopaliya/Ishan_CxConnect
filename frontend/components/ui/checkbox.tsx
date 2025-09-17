import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean)=>void
  label?: string;
  helperText?: string;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  helperText,
  disabled = false,
  error = false,
  id,
  className = '',
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36)}`;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={checkboxId}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={helperText ? `${checkboxId}-description` : undefined}
            className={`h-4 w-4 rounded border focus:outline-none  transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-gray-100
              ${error ? 'border-red-500 text-red-600 focus:ring-red-500' : 'border-gray-300 text-blue-600 focus:ring-blue-500'}
            `}
          />
        </div>
        {(label || helperText) && (
          <div className="ml-3 text-sm">
            {label && (
              <label htmlFor={checkboxId} className="font-medium text-gray-900">
                {label}
              </label>
            )}
            {helperText && (
              <p id={`${checkboxId}-description`} className={`mt-1 ${error ? 'text-red-600' : 'text-gray-500'}`}>
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkbox;

 