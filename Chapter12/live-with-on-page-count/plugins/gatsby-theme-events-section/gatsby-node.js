exports.onPreInit = () => console.log("Loaded gatsby-theme-events-section")

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  
  const EventTemplate = require.resolve(`./src/templates/event`);
  
  const EventsQuery = await graphql(`
  {
    allEventsJson {
      nodes {
        fields {
          slug
        }
      }
    }
  }
  
  `);
  if (EventsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const events = EventsQuery.data.allEventsJson.nodes;
  events.forEach(({ fields: { slug } }) => {
    createPage({
      path: `event${slug}`,
      component: EventTemplate,
      context: {
        slug: slug,
      },
    });
  });

};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `EventsJson`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
