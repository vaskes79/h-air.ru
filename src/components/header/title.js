import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"

const Title = ({ data, ...props }) => (
  <h1>
    <Link {...props} to="/">
      <strong>{data}</strong>
    </Link>
  </h1>
)

Title.propTypes = {
  data: PropTypes.array,
}

export default Title
