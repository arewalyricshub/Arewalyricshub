import React from 'react';

function Spinner({
  size = 'medium',
  label = 'Loading...',
  className = '',
}) {
  return (
    <span
      className={[
        'ui-spinner-wrapper',
        `ui-spinner-${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className="ui-spinner" aria-hidden="true" />
      {label && (
        <span className="ui-spinner-label">
          {label}
        </span>
      )}
    </span>
  );
}

export default Spinner;
