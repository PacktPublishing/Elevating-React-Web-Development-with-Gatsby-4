import React from "react";
import { graphql } from "gatsby";

export default function Event({ data }){
  const {
    event: { description, title, location, date },
  } = data;

  return (
    <div className="prose max-w-5xl">
      <h1>{title}</h1>
      <p>
        {date} - {location}
      </p>
      <p>{description}</p>
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    event: eventsJson(fields: { slug: { eq: $slug } }) {
      description
      title
      location
      date(formatString: "dddd Do MMMM yyyy")
    }
  }
`;
