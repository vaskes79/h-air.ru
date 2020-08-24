import PropTypes from "prop-types"
import React from "react"
import Gallery from "./gallery"

const Certificate = ({ data }) => {
  return (
    <>
      <Gallery photos={data} />
    </>
  )
}

Certificate.propTypes = {
  data: PropTypes.array,
}

export default Certificate
