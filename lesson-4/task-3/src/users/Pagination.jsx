import React from 'react';

const Pagination = ({ tooggleNextPage, toogglePrevPage, pageNumber, totalItems }) => {
  const isPrevPageAvailable = pageNumber > 1;
  const lastPage = Math.ceil(totalItems / 3);
  const isNextPageAvailable = pageNumber < lastPage;
  return (
    <div className="pagination">
      <button disabled={!isPrevPageAvailable} onClick={toogglePrevPage} className="btn">
        {isPrevPageAvailable ? '←' : ''}
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button disabled={!isNextPageAvailable} onClick={tooggleNextPage} className="btn">
        {isNextPageAvailable ? '→' : ''}
      </button>
    </div>
  );
};
export default Pagination;
