import PropTypes from "prop-types"
// import { Link } from "gatsby"
import React from "react"

const Nav = props => (
  <nav {...props}>
    <button onClick={props.handelOpen}>обо мне</button>
  </nav>
)

Nav.propTypes = {
  props: PropTypes.object,
}

export default Nav
