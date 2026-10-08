import React from 'react';
import Modal from './Modal.jsx';

function ConfirmDialog({
  isOpen = false,
  onClose,
  onConfirm,
  title = 'Confirm action',
  message = 'Are you sure you want to continue?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
  loading = false,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={loading ? undefined : onClose}
      title={title}
      showCloseButton={!loading}
      closeOnOverlay={!loading}
      size="small"
    >
      <div className="ui-confirm-dialog">
        <p className="ui-confirm-dialog-message">
          {message}
        </p>

        <div className="ui-confirm-dialog-actions">
          <button
            type="button"
            className="ui-confirm-dialog-cancel"
            onClick={onClose}
            disabled={loading}
          >
            {cancelText}
          </button>

          <button
            type="button"
            className={`ui-confirm-dialog-confirm ui-confirm-dialog-${variant}`}
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? 'Processing...' : confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
