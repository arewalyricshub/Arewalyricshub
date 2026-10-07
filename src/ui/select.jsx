import React from 'react';

function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  error = '',
  disabled = false,
  required = false,
  className = '',
  ...props
}) {
  const selectId = name || 'select-input';

  return (
    <div className={`ui-input-group ${className}`}>
      {label && (
        <label htmlFor={selectId} className="ui-input-label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`ui-input ${error ? 'ui-input-error' : ''}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="ui-input-error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Select;
