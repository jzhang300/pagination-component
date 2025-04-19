import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "Indeed/Icon";
import PaginationSlot from "./_PaginationSlot";

const PaginationArrow = ({
 type, component, label, size, hasDividerOnMobile, disabled, ...props 
}) => (
  <PaginationSlot
    className={classNames("icl-Pagination-arrow",
      { "icl-Pagination-arrow--disabled": disabled },
      { "icl-Pagination-arrow--hasDividerOnMobile": hasDividerOnMobile })}
    innerClassName="icl-Pagination-arrowInner"
    innerAriaHidden={true}
    component="a"
    label={label}
    size={size}
    {...props}
    href={disabled ? null : props.href}
    tabIndex={disabled ? -1 : null}
  >
    {type === "prev" ? (
      <Icon color="black" size={size} title={label} aria-hidden="true" type="chevron-left" />
    ) : (
      <Icon color="black" size={size} title={label} aria-hidden="true" type="chevron-right" />
    )}
  </PaginationSlot>
);

PaginationArrow.propTypes = {
  type: PropTypes.oneOf(["prev", "next"]).isRequired,
  size: PropTypes.oneOf(["sm", "md"]),
  disabled: PropTypes.bool,
  hasDividerOnMobile: PropTypes.bool,
  label: PropTypes.string.isRequired
};

PaginationArrow.defaultProps = {
  disabled: false,
  hasDividerOnMobile: false,
  size: "md"
};

export default PaginationArrow;
