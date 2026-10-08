import React from 'react';
import Logo from './Logo.jsx';

function BrandLoader({
  message = 'Loading AREWA LYRICS HUB...',
  size = 'medium',
  className = '',
}) {
  return (
    <div
      className={`brand-loader ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="brand-loader-logo">
        <Logo size={size} />
      </div>

      <div className="brand-loader-spinner" aria-hidden="true">
        <span />
      </div>

      {message && (
        <p className="brand-loader-message">
          {message}
        </p>
      )}
    </div>
  );
}

export default BrandLoader;
