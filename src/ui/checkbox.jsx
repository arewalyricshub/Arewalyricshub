import React from 'react';

function Checkbox({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  error = '',
  className = '',
  ...props
}) {
  const checkboxId = name || 'checkbox-input';

  return (
    <div className={`ui-checkbox-group ${className}`}>
      <label htmlFor={checkboxId} className="ui-checkbox-label">
        <input
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className="ui-checkbox"
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

export default Checkbox;
