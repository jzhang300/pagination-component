import React from "react";
import PropTypes from "prop-types";
import PaginationSlot from "./_PaginationSlot";

// merge request trigger

const PaginationPage = ({
 children, label, labelAfter, isCurrent, size, ...props 
}) => (
  <PaginationSlot
    className="icl-Pagination-page"
    component="a"
    label={label}
    size={size}
    isCurrent={isCurrent}
    {...props}
  >
    {children}
  </PaginationSlot>
);

PaginationPage.propTypes = {
  isCurrent: PropTypes.bool,
  label: PropTypes.string,
  labelAfter: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md"])
  // Props to whitelist for <a> elements
  // href
  // target
  // rel
  // onClick - good for analytics binding and link hijacking in SPA's
  // aria-*
  // role?
  // tabIndex?
};

PaginationPage.defaultProps = {
  isCurrent: false,
  label: "Show page ",
  size: "md"
};

export default PaginationPage;
