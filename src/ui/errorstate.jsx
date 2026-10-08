import React from 'react';

function ErrorState({
  title = 'Something went wrong',
  message = 'We could not complete this request. Please try again.',
  onRetry,
  retryText = 'Try again',
  className = '',
}) {
  return (
    <div
      className={`ui-error-state ${className}`}
      role="alert"
    >
      <div
        className="ui-error-state-icon"
        aria-hidden="true"
      >
        !
      </div>

      <h3 className="ui-error-state-title">
        {title}
      </h3>

      <p className="ui-error-state-message">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          className="ui-error-state-retry"
          onClick={onRetry}
        >
          {retryText}
        </button>
      )}
    </div>
  );
}

export default ErrorState;
