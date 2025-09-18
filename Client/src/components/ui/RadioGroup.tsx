import React, { useEffect, useRef, useState } from 'react';

interface RadioOption {
  value: string;
  label: string;
  helperText?: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  direction?: 'vertical' | 'horizontal';
  error?: boolean;
  groupLabel?: string;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  direction = 'vertical',
  error = false,
  groupLabel,
  className = '',
}) => {
  const radioRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  useEffect(() => {
    const currentIndex = options.findIndex((opt) => opt.value === value);
    setFocusedIndex(currentIndex >= 0 ? currentIndex : -1);
  }, [options, value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (options.length === 0) return;

    const increment = direction === 'horizontal' ? (e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0) : (e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0);
    const activate = e.key === ' ' || e.key === 'Enter';

    if (increment !== 0) {
      e.preventDefault();
      const nextIndex = (focusedIndex + increment + options.length) % options.length;
      setFocusedIndex(nextIndex);
      radioRefs.current[nextIndex]?.focus();
    } else if (activate && focusedIndex >= 0) {
      e.preventDefault();
      const opt = options[focusedIndex];
      if (!opt.disabled) onChange(opt.value);
    }
  };

  const layoutClass = direction === 'horizontal' ? 'flex flex-row gap-6' : 'flex flex-col gap-3';

  return (
    <div role="radiogroup" aria-labelledby={groupLabel ? `${name}-label` : undefined} className={`w-full ${className}`} onKeyDown={handleKeyDown}>
      {groupLabel && (
        <div id={`${name}-label`} className="text-sm font-medium text-gray-700 mb-2">
          {groupLabel}
        </div>
      )}
      <div className={layoutClass}>
        {options.map((opt, index) => (
          <label key={opt.value} className={`flex items-start gap-2 cursor-pointer ${opt.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <input
              ref={(el) => (radioRefs.current[index] = el)}
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              disabled={opt.disabled}
              aria-invalid={error}
              className={`mt-1 h-4 w-4 border rounded-full focus:outline-none  transition-colors duration-200
                ${error ? 'border-red-500 text-red-600 focus:ring-red-500' : 'border-gray-300 text-blue-600 focus:ring-blue-500'}
              `}
            />
            <span className="text-sm">
              <span className="block text-gray-900">{opt.label}</span>
              {opt.helperText && (
                <span className={`block mt-0.5 ${error ? 'text-red-600' : 'text-gray-500'}`}>{opt.helperText}</span>
              )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;


