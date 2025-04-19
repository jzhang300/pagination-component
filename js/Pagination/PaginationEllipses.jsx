import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * It's an ellipses!
 * @param {[type]}  size
 * @param {Boolean} isDouble sometimes PaginationEllipses will take two slots to make sure Pagination component as a whole never shifts its width.
 */
const PaginationEllipses = ({ size, isDouble }) => (
  <div
    className={classNames("icl-Pagination-slot", `icl-Pagination-slot--${size}`, "icl-Pagination-ellipses", {
      "icl-Pagination-ellipses--double": isDouble
    })}
    aria-hidden="true"
  >
    ...
  </div>
);

PaginationEllipses.propTypes = {
  size: PropTypes.oneOf(["sm", "md"]),
  isDouble: PropTypes.bool
};

PaginationEllipses.defaultProps = {
  size: "md",
  isDouble: false
};

export default PaginationEllipses;
