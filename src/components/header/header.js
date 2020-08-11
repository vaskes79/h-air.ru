import React, { useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Certificate from "../certificate"
import Title from "./title"
import Nav from "./nav"
import Fullname from "../fullname"
import Contacts from "../contacts"
import Fuature from "../feature"
import Social from "../social"
import "./header.css"

const Header = ({ data }) => {
  const {
    title,
    photo: {
      childImageSharp: { fluid: photo },
    },
    content,
    fullname,
    contacts,
    feature,
    social,
    certificates,
  } = data

  const [isOpen, setOpenStatus] = useState(false)

  return (
    <>
      <section
        className={`header-content ${isOpen ? "header-content--active" : ""}`}
      >
        {fullname && <Fullname data={fullname} />}
        {contacts && <Contacts data={contacts} />}
        {feature && <Fuature data={feature} />}
        {social && <Social data={social} />}
        {content && <p>{content}</p>}
        {certificates && <Certificate data={certificates} />}
        {/*photo && <Img fluid={photo} />*/}
      </section>
      <header className="header">
        <div className="header-container">
          {title && <Title className="header-title" data={title} />}
          <Nav handelOpen={() => setOpenStatus(!isOpen)} />
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  data: PropTypes.any,
}

export default Header
