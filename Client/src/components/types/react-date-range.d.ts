declare module 'react-date-range' {
  import * as React from 'react';

  export interface Range {
    startDate: Date;
    endDate: Date;
    key?: string;
    color?: string;
  }

  export interface DateRangeProps {
    ranges: Range[];
    onChange: (item: { selection: Range }) => void;
    moveRangeOnFirstSelection?: boolean;
    showSelectionPreview?: boolean;
    months?: number;
    direction?: 'vertical' | 'horizontal';
    minDate?: Date;
    maxDate?: Date;
    weekdayDisplayFormat?: string;
    staticRanges?: any[];
    inputRanges?: any[];
  }

  export const DateRange: React.FC<DateRangeProps>;
  export const DateRangePicker: React.FC<DateRangeProps>;

  export const defaultStaticRanges: any[];
  export const defaultInputRanges: any[];
}


