import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";

export default function About({ data }) {
  const {
    markdownRemark: { html },
  } = data;
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24 text-center">
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
  }
`;
