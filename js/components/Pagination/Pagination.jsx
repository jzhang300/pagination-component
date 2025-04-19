import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PaginationEllipses from "./PaginationEllipses";
import PaginationArrow from "./PaginationArrow";
import PaginationPage from "./PaginationPage";

/**
 * The main Pagination component.
 * @param {[type]}  id          id for differentiating multiple <nav>'s on page
 * @param {[type]}  label       aria-label to describe the nav element for screen reader rotor differentiation
 * @param {[type]}  totalPages  total pages for component.  Worth noting it is 1-index based, not 0-index based.
 * @param {[type]}  currentPage currently selected page.  Pagination will render page numbers and ellipses according to this value.
 * @param {Boolean} hasBorder   option for no borders Pagination.
 * @param {[type]}  renderPage  a render prop API for composing each page element.  The expected use is to return a PaginationButton element.
 * @param {[type]}  renderArrow similar to renderPage but for each arrow button.
 * @param {[type]}  size        t-shirt size of the component
 */
const Pagination = ({
 id, label, totalPages, currentPage, hasBorder, renderPage, renderArrow, size 
}) => {
  let _currentPage = currentPage;
  // capping current page to not exceed page range
  if (currentPage < 1) {
    _currentPage = 1;
  }
  if (currentPage > totalPages) {
    _currentPage = totalPages;
  }
  // final array of page numbers react elements to be determined
  let pages;
  const prevPage = _currentPage - 1;
  const nextPage = _currentPage + 1;
  // threshold that _currentPage needs to pass in order to reveal startEllipses
  const startEllipsesThreshold = 4;
  // threshold that _currentPage needs to stay under in order to reveal endEllipses
  const endEllipsesThreshold = totalPages - 3;
  // show all numbers when totalPages is less than 5
  const showAllNumbers = totalPages <= 6;
  // show first ellipses when current page passes "starting" threshold
  const hasStartEllipses = !showAllNumbers && _currentPage > startEllipsesThreshold;
  // show second ellipses when current page passes the "end" threshold
  const hasEndEllipses = !showAllNumbers && _currentPage < endEllipsesThreshold;
  const hasOneEllipses = (hasStartEllipses && !hasEndEllipses) || (!hasStartEllipses && hasEndEllipses);

  // if all ellipses are hidden, just show all the pages
  if (!hasStartEllipses && !hasEndEllipses) {
    pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }
  } else if (!hasStartEllipses && hasEndEllipses) {
    // if _currentPage is towards the beginning, show first four pages
    pages = [1, 2, 3, 4, totalPages];
  } else if (hasStartEllipses && !hasEndEllipses) {
    // if _currentPage is towards the end, show last four pages
    pages = [1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  } else {
    // if _currentPage is in the middle (both ellipses are revealed), show first, middle 3, and last pages
    pages = [1, _currentPage - 1, _currentPage, _currentPage + 1, totalPages];
  }

  // transform pages for final output
  pages = pages.map(page => (
    <li className="icl-Pagination-listItem" key={`page-${page}`}>
      {React.cloneElement(renderPage({ page, _currentPage }), {
        isCurrent: _currentPage === page,
        size
      })}
    </li>
  ));

  const prevArrow = (
    <li className="icl-Pagination-listItem icl-Pagination-listItem--first">
      {React.cloneElement(renderArrow({ page: prevPage, type: "prev", disabled: _currentPage === 1 }), {
        size,
        type: "prev",
        disabled: _currentPage === 1,
        hasDividerOnMobile: true
      })}
    </li>
  );

  const nextArrow = (
    <li className="icl-Pagination-listItem icl-Pagination-listItem--last">
      {React.cloneElement(renderArrow({ page: nextPage, type: "next", disabled: _currentPage === totalPages }), {
        size,
        type: "next",
        disabled: _currentPage === totalPages
      })}
    </li>
  );

  return (
    <div className={classNames("icl-Pagination", { "icl-Pagination--hasBorder": hasBorder })}>
      <nav className={classNames("icl-Pagination-nav")} id={id || null} aria-label={label}>
        <ul className="icl-Pagination-list">
          {prevArrow}
          {pages[0]}
          {hasStartEllipses && <PaginationEllipses size={size} isDouble={hasOneEllipses} />}
          {pages[1]}
          {pages[2]}
          {pages[3]}
          {hasEndEllipses && <PaginationEllipses size={size} isDouble={hasOneEllipses} />}
          {pages[4]}
          {/* only show 6 pages, when  */}
          {pages[5] ? pages[5] : null}
          {pages[6] ? pages[6] : null}
          {nextArrow}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  renderPage: PropTypes.func,
  renderArrow: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md"]),
  id: PropTypes.string,
  hasBorder: PropTypes.bool,
  label: PropTypes.string.isRequired
};

Pagination.defaultProps = {
  size: "md",
  hasBorder: true,
  // eslint-disable-next-line react/display-name
  renderArrow: ({ page, type, disabled }) => (
    <PaginationArrow
      label={type === "next" ? "Go to next page." : "Go to previous page."}
      href={`?page=${page}&resultsPerPage=20`}
    />
  ),
  // eslint-disable-next-line react/display-name
  renderPage: ({ page, currentPage }) => (
    <PaginationPage
      label={`Page ${page}. ${currentPage === page ? "current link" : ""}`}
      href={`?page=${page}&resultsPerPage=20`}
    >
      {page}
    </PaginationPage>
  )
};

export default Pagination;
