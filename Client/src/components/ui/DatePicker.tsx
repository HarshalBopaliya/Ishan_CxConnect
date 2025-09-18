import React from 'react';

interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  errorText?: string;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value = '',
  onChange,
  min,
  max,
  disabled = false,
  required = false,
  helperText,
  error = false,
  errorText,
  className = '',
}) => {
  const baseInputClasses = `block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 transition text-sm ${
    error
      ? 'border-red-300 focus:ring-red-200 focus:border-red-500'
      : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
  } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${className}`;

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        min={min}
        max={max}
        disabled={disabled}
        className={baseInputClasses}
      />
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-xs text-red-600">{errorText || 'Invalid date'}</p>
      )}
    </div>
  );
};

export default DatePicker;
