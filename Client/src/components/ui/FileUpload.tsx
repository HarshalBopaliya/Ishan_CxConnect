import React, { ChangeEvent } from 'react';

interface FileUploadProps {
  label?: string;
  onChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: boolean;
  errorText?: string;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  onChange,
  accept,
  multiple = false,
  disabled = false,
  helperText,
  error = false,
  errorText,
  className = '',
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files || []);
    if (onChange) onChange(fileList);
  };

  const baseInputClasses = `block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 transition text-sm ${
    error
      ? 'border-red-300 focus:ring-red-200 focus:border-red-500'
      : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
  } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${className}`;

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type="file"
        onChange={handleChange}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className={baseInputClasses}
      />
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-xs text-red-600">{errorText || 'Invalid file(s) selected'}</p>
      )}
    </div>
  );
};

export default FileUpload;
