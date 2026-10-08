import React from 'react';

function Avatar({
  src = '',
  alt = '',
  name = '',
  size = 'medium',
  status = '',
  className = '',
}) {
  const initials = name
    ? name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join('')
    : '';

  const classes = [
    'ui-avatar',
    `ui-avatar-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {src ? (
        <img
          src={src}
          alt={alt || name || 'User avatar'}
          className="ui-avatar-image"
        />
      ) : (
        <span
          className="ui-avatar-initials"
          aria-label={name || 'User avatar'}
        >
          {initials || '?'}
        </span>
      )}

      {status && (
        <span
          className={`ui-avatar-status ui-avatar-status-${status}`}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}

export default Avatar;
