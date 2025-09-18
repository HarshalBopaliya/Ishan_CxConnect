import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  padding = 'md',
  shadow = 'sm',
  rounded = true,
  className = '',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const baseClasses = 'bg-white border border-gray-200 transition-shadow duration-200';
  const roundedClass = rounded ? 'rounded-lg' : '';
  
  const containerClasses = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${roundedClass} ${className}`;
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container;