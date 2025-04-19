import React from "react";
import PropTypes from "prop-types";

// merge request trigger

const A11yText = ({ children, component: ComponentProp, ...props }) => (
  <ComponentProp className="icl-a11yText" {...props}>
    {children}
  </ComponentProp>
);

A11yText.propTypes = {
  component: PropTypes.string
};

A11yText.defaultProps = {
  component: "span"
};

export default A11yText;
