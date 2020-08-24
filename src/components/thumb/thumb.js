import PropTypes from "prop-types";
import React from "react";
import "./thumb.css";

const DEV_SRV = "http://localhost:1348";
const Thumb = props => {
  const { alternativeText, url, ...restProps } = props;

  return (
    <div className="Thumb" {...restProps}>
      <img
        src={`${DEV_SRV + url}`}
        alt={`${alternativeText ? alternativeText : "images"}`}
      />
    </div>
  );
};

Thumb.propTypes = {
  url: PropTypes.string,
  alternativeText: PropTypes.string,
};

export default Thumb;
