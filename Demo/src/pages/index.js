import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "gatsby-theme-i18n";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";

export default function Index({ data }) {
  const { t } = useTranslation("globals");
  const {
    site: {
      siteMetadata: { name },
    },
  } = data;
  return (
    <Layout>
      <SEO title="Home" description="The landing page of my website" />
      <div className="max-w-5xl mx-auto py-16 lg:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-black pb-4">
                {name}
              </h1>
              <p className="mb-4">{t("developerAt")} Company A</p>
              <div className="flex space-x-2">
              <LocalizedLink to="/about" className="btn">
                {t("aboutMe")}
              </LocalizedLink>
              <LocalizedLink to="/blog" className="btn-secondary ">
                Blog
              </LocalizedLink>
              </div>
              
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
