import PropTypes from "prop-types"
import React from "react"

const Certificate = ({ data }) => {
  const images = data.map(({ id, url }) => {
    return (
      <li key={`cert-img-${id}`}>
        <img src={`http://localhost:1348${url}`} />
      </li>
    )
  })

  return (
    <>
      <ul>{images}</ul>
    </>
  )
}

Certificate.propTypes = {
  data: PropTypes.array,
}

export default Certificate
