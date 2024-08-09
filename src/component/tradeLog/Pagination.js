import React from "react";
import "./Pagination.css";
import previousIcon from "../../assets/images/previousIcon.svg";
import nextsIcon from "../../assets/images/nextsIcon.svg";

const Pagination = ({ pageDetail, reduxData, handlePrevious, handleNext, handlePageClick, handleFirst, handleLast }) => {
  const totalPages = Math.ceil(reduxData?.totalRecords / pageDetail.pageSize);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, pageDetail.page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
 
    if (pageDetail.page - startPage > Math.floor(maxPagesToShow / 2)) {
      // Show ellipsis if there are more pages before the current page
      pageNumbers.push(
        <span key="start-ellipsis">...</span>
      );
      startPage = pageDetail.page - Math.floor(maxPagesToShow / 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageClick(i)} className={i === pageDetail.page ? "active" : ""}>
          {i}
        </button>
      );
    }

    if (totalPages - endPage > 0) {
      // Show ellipsis if there are more pages after the current page
      pageNumbers.push(
        <span key="end-ellipsis">...</span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      {pageDetail.page > 1 && <button onClick={handleFirst}>First</button>}
      {pageDetail.page > 1 && <img className="imgs" src={previousIcon} alt="previous" onClick={handlePrevious}/>}
      {renderPageNumbers()}
      {pageDetail.page < totalPages && <img className="imgs" src={nextsIcon} alt="next" onClick={handleNext}/>}
      {pageDetail.page < totalPages && <button onClick={handleLast}>Last</button>}
    </div>
  );
};

export default Pagination;
