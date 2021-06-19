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
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'elevating-gatsby',
        schemas: {
          icebreaker: require('./src/schemas/icebreaker.json'),
        },
      }
    },
    `gatsby-plugin-postcss`,
  ],
};
