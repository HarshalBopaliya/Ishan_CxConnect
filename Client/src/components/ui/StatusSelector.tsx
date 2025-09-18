import React, { useEffect, useRef, useState } from 'react';
import IshanIcon from "../icons";

type StatusValue = 'active' | 'inactive';

interface StatusSelectorProps {
  value: StatusValue;
  onChange: (next: StatusValue) => void;
  className?: string;
  disabled?: boolean;
}

const StatusSelector: React.FC<StatusSelectorProps> = ({ value, onChange, className = '', disabled = false }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const Dot = ({ color }: { color: string }) => (
    <span className={`inline-block h-3 w-3 rounded-full ${color}`} />
  );

  const current = value === 'active'
    ? { label: 'Active', color: 'bg-green-500' }
    : { label: 'Inactive', color: 'bg-red-500' };

  return (
    <div ref={ref} className={`relative inline-flex ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(v => !v)}
        className={`flex items-center gap-2 pl-2 pr-8 py-1.5 border rounded-md bg-white text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          disabled ? 'border-gray-200 text-gray-400' : 'border-gray-300 hover:border-gray-400 text-gray-900'
        }`}
      >
        <Dot color={current.color} />
        {/* <span>{current.label}</span> */}
        <IshanIcon variant='chevronDown' className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500' />
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
          <ul className="py-1 text-sm">
            <li>
              <button
                type="button"
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-left"
                onClick={() => { onChange('active'); setOpen(false); }}
              >
                <Dot color="bg-green-500" />
                <span>Active</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-left"
                onClick={() => { onChange('inactive'); setOpen(false); }}
              >
                <Dot color="bg-red-500" />
                <span>Inactive</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatusSelector;


