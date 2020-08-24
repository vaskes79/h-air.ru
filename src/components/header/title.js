import PropTypes from "prop-types";
import { Link } from "gatsby";
import React from "react";

const Title = ({ name, ...props }) => (
  <h1>
    <Link {...props} to="/">
      <strong>{name}</strong>
    </Link>
  </h1>
);

Title.propTypes = {
  name: PropTypes.string,
};

export default Title;
