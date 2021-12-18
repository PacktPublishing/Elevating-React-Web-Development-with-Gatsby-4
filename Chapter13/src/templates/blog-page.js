import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import TagList from "../components/blog-posts/TagList";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/layout/SEO";

export default function BlogPage({ data }) {
  const {
    blogpost: {
      frontmatter: { date, tags, title, hero, desc },
      body,
    },
  } = data;
  const heroImage = getImage(hero);
  const shortDate = date.split("T")[0];
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <div className="max-w-5xl space-y-4 mx-auto py-6 md:py-12 overflow-x-hidden lg:overflow-x-visible">
        <GatsbyImage
          image={heroImage}
          alt="Your alt text"
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="flex items-center space-x-2">
          <p className="text-lg opacity-50">{shortDate}</p>
          <TagList tags={tags} />
        </div>
        <div className="prose max-w-5xl">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($locale: String!, $slug: String!) {
    blogpost: mdx(
      frontmatter: { slug: { eq: $slug } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        date
        title
        desc
        tags
        hero {
          childImageSharp {
            gatsbyImageData(width: 600, height: 400, placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`;
