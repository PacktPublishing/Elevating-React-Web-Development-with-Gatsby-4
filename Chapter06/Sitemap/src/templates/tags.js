import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/Layout";
import TagList from "../components/blog-posts/TagList";

export default function Tags({ pageContext, data }) {
  const { tag } = pageContext;
  const {
    blogposts: { nodes },
  } = data;
  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8 py-6 md:py-12">
        <p>Posts tagged with "<span className="font-bold">{tag}</span>"</p>
        {nodes.map(
          ({ frontmatter: { date, tags, title, desc }, fields: { slug } }) => (
            <div>
              <Link to={`/blog${slug}`}>
                <h2 className="text-2xl font-medium">{title}</h2>
                <div className="flex items-center space-x-2">
                  <p className="text-lg opacity-50">{date.split("T")[0]}</p>
                  <TagList tags={tags} />
                </div>
                <p>{desc}</p>
              </Link>
            </div>
          )
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($tag: String) {
    blogposts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, type: { eq: "Blog" } } }
    ) {
      totalCount
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
