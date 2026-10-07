import React, { useEffect } from 'react';

function Modal({
  isOpen = false,
  onClose,
  title = '',
  children,
  size = 'medium',
  closeOnOverlay = true,
  showCloseButton = true,
  className = '',
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (
      closeOnOverlay &&
      event.target === event.currentTarget
    ) {
      onClose?.();
    }
  };

  return (
    <div
      className="ui-modal-overlay"
      role="presentation"
      onMouseDown={handleOverlayClick}
    >
      <div
        className={`ui-modal ui-modal-${size} ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'ui-modal-title' : undefined}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className="ui-modal-header">
            {title && (
              <h2 id="ui-modal-title" className="ui-modal-title">
                {title}
              </h2>
            )}

            {showCloseButton && (
              <button
                type="button"
                className="ui-modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}

        <div className="ui-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
