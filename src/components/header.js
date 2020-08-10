import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Certificate from "./certificate"
import Title from "./title"
import Fullname from "./fullname"
import Contacts from "./contacts"
import Fuature from "./feature"
import Social from "./social"

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

  return (
    <header>
      {title && <Title data={title} />}
      {fullname && <Fullname data={fullname} />}
      {contacts && <Contacts data={contacts} />}
      {feature && <Fuature data={feature} />}
      {certificates && <Certificate data={certificates} />}
      {photo && <Img fluid={photo} />}
      {content && <p>{content}</p>}
      {social && <Social data={social} />}

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.any,
}

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
