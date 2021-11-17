const React = require("react")
const gatsbyPluginImage = jest.requireActual("gatsby-plugin-image")

module.exports = {
  ...gatsbyPluginImage,
  StaticImage: () => React.createElement("div", {
    id: "StaticImage",
  }),
}