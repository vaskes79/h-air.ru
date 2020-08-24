import PropTypes from "prop-types"
import React from "react"

const Fuature = ({ data }) => {
  return (
    <ul>
      {data.map(({ title, id }) => (
        <li key={`feature-${id}`}>{title}</li>
      ))}
    </ul>
  )
}

Fuature.propTypes = {
  data: PropTypes.array,
}

export default Fuature
