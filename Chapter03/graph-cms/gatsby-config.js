require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://your.website`,
    name: `Your Name`,
    role: `Developer at Company`,
    bio: `My short bio that I will use to introduce myself.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx-bio`,
        path: `${__dirname}/MDX`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
  ],
};
