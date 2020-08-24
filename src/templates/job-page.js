import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

const JobPage = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export const query = graphql`
  query JobQuery($id: String!) {
    job: strapiJob(id: { eq: $id }) {
      title
      slug
      youtube
      description
      photo {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
      photos {
        photos {
          url
        }
      }
    }
  }
`;

JobPage.propTypes = {
  data: PropTypes.obj,
};

export default JobPage;
