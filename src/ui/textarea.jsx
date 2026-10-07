import React from 'react';

function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  error = '',
  disabled = false,
  required = false,
  rows = 5,
  className = '',
  ...props
}) {
  const textareaId = name || 'textarea-input';

  return (
    <div className={`ui-input-group ${className}`}>
      {label && (
        <label htmlFor={textareaId} className="ui-input-label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        className={`ui-input ui-textarea ${
          error ? 'ui-input-error' : ''
        }`}
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

export default Textarea;
