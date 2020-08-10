import PropTypes from "prop-types"
import React from "react"

const Contacts = ({ data }) => {
  const { email, phone } = data

  return (
    <ul>
      <li>{email}</li>
      <li>{phone}</li>
    </ul>
  )
}

Contacts.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
}

export default Contacts
