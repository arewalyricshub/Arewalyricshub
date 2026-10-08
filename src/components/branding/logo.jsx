import React from 'react';

function Logo({
  dark = false,
  size = 'medium',
  alt = 'AREWA LYRICS HUB',
  className = '',
}) {
  const logoSrc = dark
    ? '/AREWA-LYRICS-HUB/logo-dark.svg'
    : '/AREWA-LYRICS-HUB/logo.svg';

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={[
        'brand-logo',
        `brand-logo-${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

export default Logo;
