import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, aboutData }) => {
  return (
    <>
      <Header data={aboutData} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://h-air.ru">h-air.ru</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  aboutData: PropTypes.any.isRequired,
}

export default Layout
