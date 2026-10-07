import React from 'react';

function Radio({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  error = '',
  className = '',
  ...props
}) {
  const radioId = `${name}-${value}`;

  return (
    <div className={`ui-radio-group ${className}`}>
      <label htmlFor={radioId} className="ui-radio-label">
        <input
          id={radioId}
          name={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className="ui-radio"
          {...props}
        />

        {label && <span>{label}</span>}
      </label>

      {error && (
        <p className="ui-input-error-message" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Radio;
