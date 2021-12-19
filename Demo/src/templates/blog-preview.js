import React from "react";
import { graphql } from "gatsby";
import { LocalizedLink } from "gatsby-theme-i18n"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import Pagination from "../components/blog-posts/Pagination";
import TagList from "../components/blog-posts/TagList";

export default function BlogPreview({ pageContext, data }) {
  const { numPages, currentPage } = pageContext;
  const {
    blogposts: { nodes },
  } = data;
  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-12 py-6 md:py-12">
        {nodes.map(
          ({ frontmatter: { date, tags, title, desc, hero, slug } }) => {
            const heroImage = getImage(hero);
            return (
              <div className="transform md:hover:scale-105 transition duration-300">
                <LocalizedLink to={`${slug}`}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <GatsbyImage
                      image={heroImage}
                      alt="Your alt text"
                      className="mx-auto w-full rounded"
                    />
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <h2 className="text-2xl font-medium">{title}</h2>
                      <div className="flex items-center space-x-2">
                        <p className="text-lg opacity-50">
                          {date.split("T")[0]}
                        </p>
                        <TagList tags={tags} />
                      </div>
                      <p>{desc}</p>
                    </div>
                  </div>
                </LocalizedLink>
              </div>
            );
          }
        )}
        <Pagination numPages={numPages} currentPage={currentPage} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($locale: String!,$skip: Int!, $limit: Int!) {
    blogposts: allMdx(
      limit: $limit
      skip: $skip
      filter: {frontmatter: {type: {eq: "Blog"}}, fields: {locale: { eq: $locale }}}
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date
          title
          tags
          desc
          slug
          hero {
            childImageSharp {
              gatsbyImageData(width: 480, height: 320, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
