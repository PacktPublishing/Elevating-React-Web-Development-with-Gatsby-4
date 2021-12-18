import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function About({ data }) {
  const {
    mdx: { body },
    gitHubContributions: { totalContributions },
  } = data;
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24 text-center">
        <MDXRenderer>{body}</MDXRenderer>
        <p>
          In the last year I have made <b>{totalContributions}</b> on Github.
        </p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    mdx(frontmatter: { type: { eq: "bio" } }) {
      body
    }
    gitHubContributions {
      totalContributions
    }
  }
`;
