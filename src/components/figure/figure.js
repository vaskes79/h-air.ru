import PropTypes from "prop-types";
import React from "react";
import "./figure.css";

const DEV_SRV = "http://localhost:1348";
const Figure = props => {
  const { alternativeText, caption, url, formats, ...restProps } = props;
  console.log(formats);

  return (
    <figure className="Figure" {...restProps}>
      <img
        src={`${DEV_SRV + url}`}
        alt={`${alternativeText ? alternativeText : "images"}`}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

Figure.propTypes = {
  formats: PropTypes.object,
  id: PropTypes.number,
  url: PropTypes.string,
  alternativeText: PropTypes.string,
  caption: PropTypes.string,
};

export default Figure;
