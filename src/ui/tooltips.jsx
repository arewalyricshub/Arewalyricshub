import React, { useState } from 'react';

function Tooltip({
  children,
  content,
  position = 'top',
  delay = 200,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    setIsVisible(false);
  };

  return (
    <span
      className={`ui-tooltip-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}

      {isVisible && content && (
        <span
          className={`ui-tooltip ui-tooltip-${position}`}
          role="tooltip"
        >
          {content}
        </span>
      )}
    </span>
  );
}

export default Tooltip;
