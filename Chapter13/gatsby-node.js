const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve(`./src/templates/blog-page.js`);
  const BlogPreviewTemplate = path.resolve(`./src/templates/blog-preview.js`);
  const TagsTemplate = path.resolve(`./src/templates/tags.js`);
  const BlogPostQuery = await graphql(`
    {
      allMdx(filter: { frontmatter: { type: { eq: "Blog" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      tagsGroup: allMdx(filter: { frontmatter: { type: { eq: "Blog" } } }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `);
  if (BlogPostQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const BlogPosts = BlogPostQuery.data.allMdx.nodes;
  const postsPerPage = 6;
  const numPages = Math.ceil(BlogPosts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: BlogPreviewTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        slug: i === 0 ? `/blog` : `/blog/${i + 1}`,
      },
    });
  });
  BlogPosts.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `${slug}`,
      component: BlogPostTemplate,
      context: {
        slug: slug,
      },
    });
  });
  BlogPostQuery.data.tagsGroup.group.forEach((group) => {
    createPage({
      path: `tags/${_.kebabCase(group.tag)}/`,
      component: TagsTemplate,
      context: {
        tag: group.tag,
      },
    });
  });
};
