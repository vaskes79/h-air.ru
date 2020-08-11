import React from "react"
import PropTypes from "prop-types"
import InfoIcon from "@material-ui/icons/Info"

const Nav = props => (
  <nav {...props}>
    <button onClick={props.handelOpen}>
      обо мне <InfoIcon />
    </button>
  </nav>
)

Nav.propTypes = {
  props: PropTypes.object,
}

export default Nav
