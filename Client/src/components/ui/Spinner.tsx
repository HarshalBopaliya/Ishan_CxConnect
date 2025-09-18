import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple';
  label?: string;
  className?: string;
}

const sizeMap = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-4',
};

const colorMap = {
  blue: 'border-blue-600 border-t-transparent',
  gray: 'border-gray-600 border-t-transparent',
  green: 'border-green-600 border-t-transparent',
  red: 'border-red-600 border-t-transparent',
  yellow: 'border-yellow-500 border-t-transparent',
  purple: 'border-purple-600 border-t-transparent',
};

const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'blue',
  label = 'Loading',
  className = '',
}) => {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} role="status" aria-live="polite" aria-label={label}>
      <span
        className={`inline-block animate-spin rounded-full border-solid ${sizeMap[size]} ${colorMap[color]}`}
      />
      {label && <span className="text-sm text-gray-600">{label}</span>}
    </span>
  );
};

export default Spinner;





