import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import "./reset.css"
import "./layout.css"

const Layout = ({ children, aboutData }) => {
  return (
    <>
      <Header data={aboutData} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  aboutData: PropTypes.any.isRequired,
}

export default Layout
