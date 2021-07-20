import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import TagList from "../components/blog-posts/TagList"

export default function BlogPage({ data }) {
  const {
    blogpost: {
      frontmatter: { date, tags, title },
      html,
    },
  } = data;
  const shortDate = date.split("T")[0];
  return (
    <Layout>
      <div className="max-w-5xl space-y-4 mx-auto py-6 md:py-12 overflow-x-hidden lg:overflow-x-visible">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="flex items-center space-x-2">
          <p className="text-lg opacity-50">{shortDate}</p>
          <TagList tags={tags} />
        </div>
        <div
          className="prose max-w-5xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    blogpost: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        tags
      }
      html
    }
  }
`;
