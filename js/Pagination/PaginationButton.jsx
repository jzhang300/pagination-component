import React from "react";
import PropTypes from "prop-types";
import PaginationSlot from "../Pagination/_PaginationSlot";

// merge request trigger

const PaginationButton = ({
 children, label, labelAfter, isCurrent, size, ...props
}) => (
  <PaginationSlot
    className="icl-Pagination-page"
    component="button"
    label={label}
    labelAfter={labelAfter}
    size={size}
    isCurrent={isCurrent}
    {...props}
  >
    {children}
  </PaginationSlot>
);

PaginationButton.propTypes = {
  page: PropTypes.number.isRequired,
  isCurrent: PropTypes.bool,
  label: PropTypes.string,
  labelAfter: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md"])
};

PaginationButton.defaultProps = {
  isCurrent: false,
  label: "Show page ",
  size: "md"
};

export default PaginationButton;
