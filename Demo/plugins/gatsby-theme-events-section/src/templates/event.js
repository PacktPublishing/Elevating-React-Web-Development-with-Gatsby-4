import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../src/components/layout/Layout";

export default function Event({ data }) {
  const {
    event: { description, title, location, date },
  } = data;

  return (
    <Layout>
      <div className="prose max-w-5xl mx-auto py-8">
        <h1>{title}</h1>
        <p>
          {date} - {location}
        </p>
        <p>{description}</p>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    event: eventsJson(fields: { slug: { eq: $slug } }) {
      description
      title
      location
      date(formatString: "dddd Do MMMM yyyy")
    }
  }
`;
