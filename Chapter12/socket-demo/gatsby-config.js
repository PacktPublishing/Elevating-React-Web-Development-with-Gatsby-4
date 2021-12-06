require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://your.website.com`,
    name: `Your Name`,
    role: `Developer at Company`,
    bio: `My short bio that I will use to introduce myself.`,
    social: {
      twitter: "@samlarsendisney",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-theme-sample-page`,
    {
      resolve: `gatsby-theme-events-section`,
      options: {
        path: "test",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-bio`,
        path: `${__dirname}/MD/bio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-blog-posts`,
        path: `${__dirname}/MD/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/images`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-github-profile`,
      options: {
        token: process.env.GITHUB_PROFILE_BEARER_TOKEN,
        username: "slarsendisney",
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`, `desc`],
        resolvers: {
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            tags: (node) => node.frontmatter.tags,
            desc: (node) => node.frontmatter.desc,
            path: (node) => `/blog` + node.fields.slug,
          },
        },
        filter: (node, getNode) => node.frontmatter.type === "Blog",
      },
    },
  ],
};
