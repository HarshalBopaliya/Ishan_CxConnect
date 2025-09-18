import React, { useEffect, useMemo, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorSelectorProps {
  value: string;
  onChange: (next: string) => void;
  presets?: string[];
  className?: string;
}

const DEFAULT_PRESETS = ['#ffffff', '#ef4444', '#3b82f6', '#22c55e', '#ec4899', '#eab308', '#7c3aed'];

const ColorSelector: React.FC<ColorSelectorProps> = ({ value, onChange, presets, className = '' }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const swatches = useMemo(() => (presets && presets.length > 0 ? presets : DEFAULT_PRESETS), [presets]);

  const isSelected = (hex: string) => value.toLowerCase() === hex.toLowerCase();

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const onDocMouseDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (popoverRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setIsOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [isOpen]);

  return (
    <div className={`relative flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-3">
        {swatches.map((hex, idx) => (
          <button
            key={`${hex}-${idx}`}
            type="button"
            aria-label={`Choose color ${hex}`}
            className={`h-8 w-8 rounded-md border ${
              isSelected(hex) ? 'ring-2 ring-offset-2 ring-blue-500' : 'ring-0'
            }`}
            style={{ backgroundColor: hex }}
            onClick={() => onChange(hex)}
          />
        ))}
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
        onClick={togglePopover}
        ref={buttonRef}
      >
        <span className="relative inline-flex h-8 w-8 items-center justify-center">
          <span className="absolute inset-0 rounded-md border" />
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="25%" stopColor="#eab308" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="75%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" fill="url(#g1)" />
          </svg>
        </span>
        <span>Custom Color</span>
      </button>
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute left-0 top-full z-20 mt-2 rounded-md border bg-white p-3 shadow-lg"
          role="dialog"
          aria-label="Custom color picker"
        >
          <HexColorPicker color={value} onChange={onChange} />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-gray-500">{value.toUpperCase()}</span>
            <button
              type="button"
              className="rounded border px-2 py-1 text-xs text-gray-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
              aria-label="Close color picker"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSelector;


