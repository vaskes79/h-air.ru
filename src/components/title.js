import PropTypes from "prop-types"
import React from "react"

const Title = ({ data }) => <h1>{data}</h1>

Title.propTypes = {
  data: PropTypes.array,
}

export default Title
