import React from 'react';
import IshanIcon from "../icons";

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  title?: string;
  message?: string;
  variant?: AlertVariant;
  className?: string;
  onClose?: () => void;
}

const variantStyles: Record<AlertVariant, { container: string; icon: string; title: string; }> = {
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-800',
    icon: 'text-blue-500',
    title: 'text-blue-900'
  },
  success: {
    container: 'bg-green-50 border-green-200 text-green-800',
    icon: 'text-green-500',
    title: 'text-green-900'
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    icon: 'text-yellow-600',
    title: 'text-yellow-900'
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-800',
    icon: 'text-red-500',
    title: 'text-red-900'
  },
};

const Alert: React.FC<AlertProps> = ({ title, message, variant = 'info', className = '', onClose }) => {
  const styles = variantStyles[variant];
  return (
    <div className={`w-full border rounded-md p-3 flex items-start gap-3 ${styles.container} ${className}`}>
      <IshanIcon variant='LucideInfo' className={`h-5 w-5 mt-0.5 ${styles.icon}`} />
      <div className="flex-1">
        {title && <div className={`font-semibold mb-0.5 ${styles.title}`}>{title}</div>}
        {message && <div className="text-sm leading-5">{message}</div>}
      </div>
      {onClose && (
        <button
          type="button"
          aria-label="Close alert"
          className="shrink-0 rounded hover:bg-white/40 p-1"
          onClick={onClose}
        >
          <IshanIcon variant='X' className='h-4 w-4' />
        </button>
      )}
    </div>
  );
};

export default Alert;


