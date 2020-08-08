export const queryAbout = `
  {
    allStrapiAbout {
      nodes {
        title
        contacts {
          email
          phone
        }
        content
        certificates {
          formats {
            large {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        feature {
          title
        }
        fullname {
          lastname
          name
        }
        social {
          facebook
          vk
          insta
          youtube
          url
        }
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
