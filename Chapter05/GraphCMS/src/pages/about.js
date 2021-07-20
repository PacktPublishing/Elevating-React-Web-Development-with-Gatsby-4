import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";

export default function About({ data }) {
  const {
    markdownRemark: { html },
    graphCmsAsset: { localFile },
  } = data;
  const profileImage = getImage(localFile);
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24 text-center">
        <GatsbyImage
          image={profileImage}
          alt="Your alt text"
          className="mx-auto max-w-sm"
        />
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { type: { eq: "bio" } }) {
      html
    }
    graphCmsAsset(fileName: { eq: "profile.jpeg" }) {
      localFile {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;
