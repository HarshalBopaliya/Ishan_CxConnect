import React from 'react';

interface NoteProps {
  children: React.ReactNode;
  variant?: 'default' | 'tip' | 'warning';
  className?: string;
  onClose?: () => void;
}

const variantClasses: Record<NonNullable<NoteProps['variant']>, string> = {
  default: 'bg-gray-50 border-gray-200 text-gray-800',
  tip: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-800',
};

const Note: React.FC<NoteProps> = ({ children, variant = 'default', className = '', onClose }) => {
  return (
    <div className={`w-full border rounded-md p-3 ${variantClasses[variant]} ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-1 text-sm leading-6">{children}</div>
        {onClose && (
          <button
            type="button"
            aria-label="Dismiss note"
            className="shrink-0 rounded hover:bg-white/40 p-1"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 11-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 11-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Note;


