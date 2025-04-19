import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// TODO: refactor this, there's probably a better way to write this.
const _innerify = str => {
  return !str.includes(" ")
    ? `${str}Inner`
    : str.split(" ").reduce((accumulator, current) => `${accumulator} ${current}Inner `, "");
};

/**
 * This was initially an abstract component to support PaginationButtons and PaginationLinks.
 * It was later decided that for first iteration, only links are necessary, making
 * the abstract component's necessity questionable.  It's currently used by
 * PaginationArrow and PaginationPage and could still serve as an abstract level
 * api for composing individual Page Slots.
 * @param {[type]}  children
 * @param {[type]}  className
 * @param {[type]}  innerClassName  className for the span inside. Still kept an innerClassName because because in PaginationArrow, I didn't want modifiers to also be prefixed.
 * @param {[type]}  innerAriaHidden not elegant, but gets the job done.  There's probably a better way to do this.
 * @param {[type]}  component
 * @param {[type]}  label           aria-label
 * @param {Boolean} isCurrent
 * @param {[type]}  size
 * @param {[type]}  props
 */
const PaginationSlot = ({
  children,
  className,
  innerClassName,
  innerAriaHidden, // TODO: there's probably a "right" way to do this, but for sake of scope, I'm settling with this.
  component: ComponentProp, // This was initially designed to handle both <button>'s and <a>'s to allow for different markup with the same styles.  This is now questionable.
  label,
  isCurrent,
  size,
  ...props
}) => (
  <ComponentProp
    className={classNames("icl-Pagination-slot",
      `icl-Pagination-slot--${size}`,
      {
        "icl-Pagination-slot--current": isCurrent
      },
      className)}
    aria-label={label}
    {...props}
  >
    {/* TODO: James: there probably is a better way to handle the `innerClassName` that I didn't have time for. */}
    {/* The extra span tag was used to control the visual gray box while actual click target is the entire containing <a>. */}
    <span
      className={classNames("icl-Pagination-slotInner", innerClassName || _innerify(className))}
      aria-hidden={innerAriaHidden}
    >
      {children}
    </span>
  </ComponentProp>
);

PaginationSlot.propTypes = {
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  innerAriaHidden: PropTypes.bool,
  isCurrent: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md"]),
  component: PropTypes.oneOf(["a", "button"]).isRequired
};

PaginationSlot.defaultProps = {
  className: "",
  isCurrent: false,
  label: "Show page ",
  size: "md",
  component: "a",
  innerAriaHidden: false
};

export default PaginationSlot;
