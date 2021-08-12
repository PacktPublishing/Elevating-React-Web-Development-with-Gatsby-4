import React from "react";
import { Helmet } from "react-helmet-async";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO({ description, lang = "en", title }) {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        social: { twitter },
      },
    },
  } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          siteUrl
          social {
            twitter
          }
        }
      }
    }
  `);
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s · ${siteUrl}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        // Twitter MetaData
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitter,
        },

        // Open Graph MetaData
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `your-image-url.com`,
        },
      ]}
    />
  );
}
