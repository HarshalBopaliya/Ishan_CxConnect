import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  helperText?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const sizeConfig = {
  sm: { track: 'w-12 h-6', dot: 'h-5 w-5', translate: 'translate-x-6', text: 'text-sm' },
  md: { track: 'w-16 h-7', dot: 'h-6 w-6', translate: 'translate-x-8', text: 'text-base' },
  lg: { track: 'w-20 h-9', dot: 'h-8 w-8', translate: 'translate-x-10', text: 'text-lg' },
};

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  size = 'md',
  label,
  helperText,
  disabled = false,
  id,
  className = '',
}) => {
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;
  const cfg = sizeConfig[size];

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start gap-3">
        <button
          id={toggleId}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-describedby={helperText ? `${toggleId}-description` : undefined}
          disabled={disabled}
          onClick={() => !disabled && onChange(!checked)}
          className={`relative inline-flex ${cfg.track} flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none 
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${checked ? 'bg-blue-600' : 'bg-gray-300'}
          `}
        >
          {/* YES / NO text inside */}
          <span className="absolute inset-0 flex items-center justify-between px-2 text-xs font-semibold text-white">
            <span className={`${checked ? 'opacity-100' : 'opacity-0'} transition-opacity`}>Yes</span>
            <span className={`${checked ? 'opacity-0' : 'opacity-100'} transition-opacity`}>No</span>
          </span>

          {/* Toggle knob */}
          <span
            className={`pointer-events-none inline-block ${cfg.dot} transform rounded-full bg-white shadow ring-0 transition duration-200
              ${checked ? cfg.translate : 'translate-x-0'}
            `}
          />
        </button>

        {(label || helperText) && (
          <span className={`select-none ${cfg.text}`}>
            {label && (
              <label htmlFor={toggleId} className="font-medium text-gray-900">
                {label}
              </label>
            )}
            {helperText && (
              <p id={`${toggleId}-description`} className="text-gray-500 mt-0.5">
                {helperText}
              </p>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default Toggle;
