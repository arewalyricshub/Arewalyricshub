import React from 'react';

function EmptyState({
  title = 'Nothing here yet',
  message = '',
  icon = '📭',
  action = null,
  className = '',
}) {
  return (
    <div
      className={`ui-empty-state ${className}`}
      role="status"
    >
      {icon && (
        <div className="ui-empty-state-icon" aria-hidden="true">
          {icon}
        </div>
      )}

      <h3 className="ui-empty-state-title">
        {title}
      </h3>

      {message && (
        <p className="ui-empty-state-message">
          {message}
        </p>
      )}

      {action && (
        <div className="ui-empty-state-action">
          {action}
        </div>
      )}
    </div>
  );
}

export default EmptyState;
