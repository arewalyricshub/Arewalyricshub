import React from 'react';

function Toast({
  message,
  type = 'info',
  visible = true,
  onClose,
  duration = 5000,
}) {
  React.useEffect(() => {
    if (!visible || !onClose || duration <= 0) {
      return undefined;
    }

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [visible, onClose, duration]);

  if (!visible || !message) {
    return null;
  }

  return (
    <div
      className={`ui-toast ui-toast-${type}`}
      role="status"
      aria-live="polite"
    >
      <div className="ui-toast-content">
        <span className="ui-toast-message">
          {message}
        </span>

        {onClose && (
          <button
            type="button"
            className="ui-toast-close"
            onClick={onClose}
            aria-label="Close notification"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export default Toast;
