import PropTypes from "prop-types"
import React from "react"

const Fullname = ({ data }) => {
  const { name, lastname } = data

  return (
    <h2>
      {name} {lastname}
    </h2>
  )
}

Fullname.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    lastname: PropTypes.string,
  }),
}

export default Fullname
