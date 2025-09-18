import React from 'react';

interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  media?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  className?: string;
}

const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
};

const shadowClasses = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
};

const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  media,
  padding = 'md',
  shadow = 'sm',
  hoverable = false,
  className = '',
}) => {
  const base = 'bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-200';
  const hover = hoverable ? 'hover:shadow-lg' : '';

  return (
    <div className={`${base} ${shadowClasses[shadow]} ${hover} ${className}`}>
      {media && <div className="w-full">{media}</div>}
      {(header || padding !== 'none') && (
        <div className={`${paddingClasses[padding]} ${header ? 'border-b border-gray-200' : ''}`}>
          {header && <div className="text-lg font-semibold text-gray-900">{header}</div>}
          {!header && padding !== 'none' && <></>}
        </div>
      )}
      <div className={paddingClasses[padding]}>
        {children}
      </div>
      {(footer || padding !== 'none') && (
        <div className={`${paddingClasses[padding]} ${footer ? 'border-t border-gray-200' : ''}`}>
          {footer && <div className="text-sm text-gray-600">{footer}</div>}
          {!footer && padding !== 'none' && <></>}
        </div>
      )}
    </div>
  );
};

export default Card;





