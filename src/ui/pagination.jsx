import React from 'react';

function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  maxVisiblePages = 5,
  className = '',
}) {
  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    onPageChange?.(page);
  };

  const getVisiblePages = () => {
    const pages = [];

    let start = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );

    let end = Math.min(
      totalPages,
      start + maxVisiblePages - 1
    );

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(
        1,
        end - maxVisiblePages + 1
      );
    }

    for (let page = start; page <= end; page += 1) {
      pages.push(page);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav
      className={`ui-pagination ${className}`}
      aria-label="Pagination"
    >
      <button
        type="button"
        className="ui-pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Previous
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          type="button"
          className={`ui-pagination-button ${
            page === currentPage
              ? 'ui-pagination-active'
              : ''
          }`}
          onClick={() => handlePageChange(page)}
          aria-current={
            page === currentPage ? 'page' : undefined
          }
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="ui-pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;
