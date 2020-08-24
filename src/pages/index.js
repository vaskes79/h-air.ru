import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

const queryAbout = graphql`
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
          id
          url
        }
        feature {
          id
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
`;

const IndexPage = () => {
  const aboutData = useStaticQuery(queryAbout);

  return (
    <Layout aboutData={aboutData.allStrapiAbout.nodes[0]}>
      <h1>Content</h1>
    </Layout>
  );
};

export default IndexPage;
