import React from "react"
import PropTypes from "prop-types"

const Social = ({ data }) => {
  return (
    <ul>
      {data.facebook ? (
        <li>
          <a href={data.facebook}>facebook</a>
        </li>
      ) : null}
      {data.vk ? (
        <li>
          <a href={data.vk}>vk</a>
        </li>
      ) : null}
      {data.insta ? (
        <li>
          <a href={data.insta}>insta</a>
        </li>
      ) : null}
      {data.youtube ? (
        <li>
          <a href={data.youtube}>youtube</a>
        </li>
      ) : null}
      {data.url ? (
        <li>
          <a href={data.url}>url</a>
        </li>
      ) : null}
    </ul>
  )
}

Social.propTypes = {
  data: PropTypes.object,
}

export default Social
