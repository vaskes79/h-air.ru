import React from "react"
import PropTypes from "prop-types"
import { VkIcon } from "./icons"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"
import LinkIcon from "@material-ui/icons/Link"
import "./social.css"

const Social = ({ data }) => {
  const { vk, insta, youtube, facebook, url } = data
  return (
    <ul className="social">
      {vk && (
        <li>
          <a href={vk}>
            <VkIcon style={{ width: "1.6em", fontSize: "1.6em" }} />
          </a>
        </li>
      )}

      {insta && (
        <li>
          <a href={insta}>
            <InstagramIcon fontSize="large" />
          </a>
        </li>
      )}

      {youtube && (
        <li>
          <a href={youtube}>
            <YouTubeIcon fontSize="large" />
          </a>
        </li>
      )}

      {facebook && (
        <li>
          <a href={facebook}>
            <FacebookIcon fontSize="large" />
          </a>
        </li>
      )}

      {url && (
        <li>
          <a href={url}>
            <LinkIcon fontSize="large" />
          </a>
        </li>
      )}
    </ul>
  )
}

Social.propTypes = {
  data: PropTypes.object,
}

export default Social
