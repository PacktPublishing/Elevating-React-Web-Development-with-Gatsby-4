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
        name: `markdown-bio`,
        path: `${__dirname}/MD/bio`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
  ],
};
