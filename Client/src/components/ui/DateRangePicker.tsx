import React from 'react';
import { DateRangePicker as RDRDateRangePicker } from 'react-date-range';
import { addDays, format, startOfDay, endOfDay, startOfMonth, endOfMonth, subDays, subMonths } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export interface DateRangeValue {
  startDate: Date;
  endDate: Date;
}

interface DateRangePickerProps {
  label?: string;
  value?: DateRangeValue | null;
  onChange?: (value: DateRangeValue | null) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  label,
  value = null,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  required = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [tempRange, setTempRange] = React.useState<{ startDate: Date; endDate: Date; key: string }>(
    () => ({
      startDate: value?.startDate ?? addDays(new Date(), -7),
      endDate: value?.endDate ?? new Date(),
      key: 'selection',
    })
  );

  React.useEffect(() => {
    if (value) {
      setTempRange({ startDate: value.startDate, endDate: value.endDate, key: 'selection' });
    }
  }, [value]);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', onClickOutside);
    }
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [isOpen]);

  const displayText = value
    ? `${format(value.startDate, 'MMM d, yyyy')} - ${format(value.endDate, 'MMM d, yyyy')}`
    : 'Select date range';

  const baseInputClasses = `block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 transition text-sm border-gray-300 focus:ring-blue-200 focus:border-blue-500 ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white cursor-pointer'
    } ${className}`;

  const today = new Date();
  const staticRanges = [
    {
      label: 'Today',
      range: () => ({ startDate: startOfDay(today), endDate: endOfDay(today) }),
      isSelected: (range: any) =>
        startOfDay(range.startDate).getTime() === startOfDay(today).getTime() &&
        endOfDay(range.endDate).getTime() === endOfDay(today).getTime(),
    },
    {
      label: 'Yesterday',
      range: () => {
        const y = subDays(today, 1);
        return { startDate: startOfDay(y), endDate: endOfDay(y) };
      },
      isSelected: (range: any) => {
        const y = subDays(today, 1);
        return (
          startOfDay(range.startDate).getTime() === startOfDay(y).getTime() &&
          endOfDay(range.endDate).getTime() === endOfDay(y).getTime()
        );
      },
    },
    {
      label: 'Last 7 Days',
      range: () => ({ startDate: startOfDay(subDays(today, 6)), endDate: endOfDay(today) }),
      isSelected: () => false,
    },
    {
      label: 'Last 30 Days',
      range: () => ({ startDate: startOfDay(subDays(today, 29)), endDate: endOfDay(today) }),
      isSelected: () => false,
    },
    {
      label: 'This Month',
      range: () => ({ startDate: startOfMonth(today), endDate: endOfMonth(today) }),
      isSelected: () => false,
    },
    {
      label: 'Last Month',
      range: () => {
        const lm = subMonths(today, 1);
        return { startDate: startOfMonth(lm), endDate: endOfMonth(lm) };
      },
      isSelected: () => false,
    },
    {
      label: 'Custom Range',
      range: () => ({ startDate: tempRange.startDate, endDate: tempRange.endDate }),
      isSelected: () => false,
    },
  ];

  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <button
        type="button"
        className={baseInputClasses}
        onClick={() => !disabled && setIsOpen((v) => !v)}
        disabled={disabled}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>{displayText}</span>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <style>{`
            .rdrCalendarWrapper {
              font-size: 12px !important;
              width: 480px !important;
            }
            .rdrMonth {
              width: 220px !important;
            }
            .rdrDay {
              width: 28px !important;
              height: 28px !important;
              font-size: 11px !important;
              line-height: 28px !important;
            }
            .rdrWeekDay {
              font-size: 11px !important;
              padding: 2px 0 !important;
            }
            .rdrNextPrevButton {
              width: 24px !important;
              height: 24px !important;
            }
          `}</style>
          <div className="flex flex-col p-2">
            <RDRDateRangePicker
              ranges={[tempRange]}
              onChange={(item: any) => setTempRange(item.selection)}
              minDate={minDate}
              maxDate={maxDate}
              moveRangeOnFirstSelection={false}
              months={2}
              direction="horizontal"
              showSelectionPreview
              weekdayDisplayFormat="EEEEE"
              staticRanges={staticRanges as any}
              inputRanges={[]}
            />
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-200">
              <button
                type="button"
                className="px-3 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
                onClick={() => {
                  onChange?.(null);
                  setIsOpen(false);
                }}
              >
                Clear
              </button>
              <button
                type="button"
                className="px-3 py-1.5 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => {
                  onChange?.({ startDate: tempRange.startDate, endDate: tempRange.endDate });
                  setIsOpen(false);
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DateRangePicker;


