import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems }) => {
  const isPrevPageAvailable = currentPage > 1;
  const lastPage = Math.ceil(totalItems / 3);
  const isNextPageAvailable = currentPage < lastPage;
  return (
    <div className="pagination">
      <button disabled={!isPrevPageAvailable} onClick={goPrev} className="btn">
        {isPrevPageAvailable ? '←' : ''}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={!isNextPageAvailable} onClick={goNext} className="btn">
        {isNextPageAvailable ? '→' : ''}
      </button>
    </div>
  );
};
export default Pagination;
