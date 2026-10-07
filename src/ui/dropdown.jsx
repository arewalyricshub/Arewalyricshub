import React, { useEffect, useRef, useState } from 'react';

function Dropdown({
  trigger,
  children,
  align = 'left',
  disabled = false,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen((previous) => !previous);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`ui-dropdown ${className}`}
    >
      <button
        type="button"
        className="ui-dropdown-trigger"
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {trigger}
      </button>

      {isOpen && (
        <div
          className={`ui-dropdown-menu ui-dropdown-${align}`}
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
