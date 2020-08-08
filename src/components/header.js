import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ data }) => {
  const {
    title,
    photo: {
      childImageSharp: { fluid: photo },
    },
    content,
    fullname: { lastname, name },
    contacts: { email, phone },
    social,
    feature,
    certificates,
  } = data

  return (
    <header>
      <h1>{title}</h1>
      <h2>
        {name} {lastname}
      </h2>
      {/* Contacts */}
      <ul>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
      {/* social */}
      <pre>{JSON.stringify(social, null, 2)}</pre>
      {/* feature */}
      <pre>{JSON.stringify(feature, null, 2)}</pre>
      {/* certificates */}
      <pre>{JSON.stringify(certificates, null, 2)}</pre>
      <Img fluid={photo} />
      <p>{content}</p>
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
