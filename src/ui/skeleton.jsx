import React from 'react';

function Skeleton({
  width = '100%',
  height = '20px',
  variant = 'text',
  className = '',
  style = {},
}) {
  const classes = [
    'ui-skeleton',
    `ui-skeleton-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classes}
      aria-hidden="true"
      style={{
        width,
        height,
        ...style,
      }}
    />
  );
}

export default Skeleton;
