const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getJob = makeRequest(
    graphql,
    `
    {
      allStrapiJob {
        edges {
          node {
          id
          slug
          published
          }
        }
      }
    }
    `
  )
    .then(result => {
      result.data.allStrapiJob.edges.forEach(({ node }) => {
        const { slug, id, published } = node;

        if (published) {
          console.log(`page: ${slug} id: ${id}, published: ${published}`);
          createPage({
            path: `/jobs/${slug}`,
            component: path.resolve(`src/templates/job-page.js`),
            context: {
              id,
              slug,
            },
          });
        }
      });
    })
    .catch(err => console.log("Page Creating jobs", err));

  return Promise.all([getJob]);
};
