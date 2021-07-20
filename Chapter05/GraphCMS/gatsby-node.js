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
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Blog"}}}) {
      nodes {
        fields {
          slug
        }
      }
    }
    tagsGroup: allMarkdownRemark(filter: {frontmatter: {type: {eq: "Blog"}}}) {
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
  const BlogPosts = BlogPostQuery.data.allMarkdownRemark.nodes;
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
  BlogPosts.forEach(({ fields: { slug } }) => {
    createPage({
      path: `blog${slug}`,
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

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
