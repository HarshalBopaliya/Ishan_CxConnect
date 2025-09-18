import React from 'react';

type StatusVariant =
  | 'active'
  | 'inactive'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'pending'
  | 'neutral';

interface StatusChipProps {
  label: string;
  variant?: StatusVariant;
  size?: 'sm' | 'md';
  pill?: boolean;
  showDot?: boolean;
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<StatusVariant, { container: string; dot: string }> = {
  active:   { container: 'bg-green-50 text-green-800 border-green-200', dot: 'bg-green-500' },
  success:  { container: 'bg-green-50 text-green-800 border-green-200', dot: 'bg-green-500' },
  inactive: { container: 'bg-gray-50 text-gray-700 border-gray-200', dot: 'bg-gray-400' },
  neutral:  { container: 'bg-gray-50 text-gray-800 border-gray-200', dot: 'bg-gray-400' },
  pending:  { container: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500' },
  warning:  { container: 'bg-yellow-50 text-yellow-800 border-yellow-200', dot: 'bg-yellow-500' },
  error:    { container: 'bg-red-50 text-red-800 border-red-200', dot: 'bg-red-500' },
  info:     { container: 'bg-blue-50 text-blue-800 border-blue-200', dot: 'bg-blue-500' },
};

const sizeClasses = {
  sm: { container: 'text-xs px-2 py-0.5', dot: 'h-2 w-2', gap: 'gap-1.5' },
  md: { container: 'text-sm px-3 py-1',   dot: 'h-2.5 w-2.5', gap: 'gap-2' },
};

const StatusChip: React.FC<StatusChipProps> = ({
  label,
  variant = 'neutral',
  size = 'md',
  pill = true,
  showDot = true,
  className = '',
  ariaLabel,
}) => {
  const v = variantClasses[variant];
  const s = sizeClasses[size];
  const radius = pill ? 'rounded-full' : 'rounded-md';

  return (
    <span
      className={`inline-flex items-center ${s.gap} border ${v.container} ${s.container} ${radius} ${className}`}
      aria-label={ariaLabel || `${label} status: ${variant}`}
      role="status"
    >
      {showDot && <span className={`inline-block ${s.dot} ${v.dot} rounded-full`} />}
      <span>{label}</span>
    </span>
  );
};

export default StatusChip;


