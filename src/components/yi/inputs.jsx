import React from 'react';

function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  error = '',
  disabled = false,
  required = false,
  className = '',
  ...props
}) {
  const inputId = name || `input-${type}`;

  return (
    <div className={`ui-input-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className="ui-input-label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`ui-input ${error ? 'ui-input-error' : ''}`}
        {...props}
      />

      {error && (
        <p className="ui-input-error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
