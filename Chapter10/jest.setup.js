require(`@testing-library/jest-dom/extend-expect`);
const { useStaticQuery } = require("gatsby");

beforeAll(() => {
  useStaticQuery.mockReturnValue({
    site: {
      siteMetadata: {
        siteUrl: "test.url.com",
        social: { twitter: "@slarsendisney" },
      },
    },
  });
});