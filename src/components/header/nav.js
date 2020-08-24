import React from "react";
import PropTypes from "prop-types";
import InfoIcon from "@material-ui/icons/Info";

const Nav = props => {
  const { handelOpen, ...restProps } = props;
  return (
    <nav {...restProps}>
      <button onClick={handelOpen}>
        обо мне <InfoIcon />
      </button>
    </nav>
  );
};
Nav.propTypes = {
  handelOpen: PropTypes.func,
};

export default Nav;
