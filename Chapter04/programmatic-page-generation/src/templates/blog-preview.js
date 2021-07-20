import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/Layout";
import Pagination from "../components/blog-posts/Pagination";
import TagList from "../components/blog-posts/TagList"

export default function BlogPreview({ pageContext, data }) {
  const {
    numPages,
    currentPage
  } = pageContext
  const {
    blogposts: { nodes },
  } = data;
  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8 py-6 md:py-12">
        {nodes.map(
          ({ frontmatter: { date, tags, title, desc }, fields: { slug } }) => (
            <div>
              <Link to={`/blog${slug}`}>
                <h2 className="text-2xl font-medium">{title}</h2>
                <div className="flex items-center space-x-2">
                  <p className="text-lg opacity-50">{date.split("T")[0]}</p>
                  <TagList tags={tags}/>
                </div>
                <p>{desc}</p>
              </Link>
            </div>
          )
        )}
        <Pagination numPages={numPages} currentPage={currentPage} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    blogposts: allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "Blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date
          title
          tags
          desc
        }
        fields {
          slug
        }
      }
    }
  }
`;
