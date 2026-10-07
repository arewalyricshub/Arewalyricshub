import React from 'react';

function Switch({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) {
  const switchId = name || 'switch-input';

  return (
    <div className={`ui-switch-group ${className}`}>
      <label htmlFor={switchId} className="ui-switch-label">
        <input
          id={switchId}
          name={name}
          type="checkbox"
          role="switch"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="ui-switch-input"
          {...props}
        />

        <span className="ui-switch-track" aria-hidden="true">
          <span className="ui-switch-thumb" />
        </span>

        {label && <span className="ui-switch-text">{label}</span>}
      </label>
    </div>
  );
}

export default Switch;
