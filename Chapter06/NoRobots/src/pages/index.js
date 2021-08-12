import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import NoRobots from "../components/layout/NoRobots";

export default function Index({ data }) {
  const {
    site: {
      siteMetadata: { name, role },
    },
  } = data;

  return (
    <Layout>
      <SEO title="Home" description="The landing page of my website" />
      <NoRobots />
      <div className="max-w-5xl mx-auto py-16 lg:py-24">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-black pb-4">
                {name}
              </h1>
              <p className="mb-4">{role}</p>
              <Link to="/about" className="btn">
                About me
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <StaticImage
              src="../../assets/images/sample-photo.jpeg"
              alt="A man smiling"
              placeholder="tracedSVG"
              layout="fixed"
              width={400}
              height={600}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        name
        role
      }
    }
  }
`;
