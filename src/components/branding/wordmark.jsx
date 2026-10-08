import React from 'react';

function Wordmark({
  dark = false,
  size = 'medium',
  className = '',
}) {
  return (
    <div
      className={[
        'brand-wordmark',
        `brand-wordmark-${size}`,
        dark ? 'brand-wordmark-dark' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="AREWA LYRICS HUB"
    >
      <span className="brand-wordmark-name">
        AREWA LYRICS HUB
      </span>

      <span className="brand-wordmark-tagline">
        Hausa Lyrics & Creators Community
      </span>
    </div>
  );
}

export default Wordmark;
