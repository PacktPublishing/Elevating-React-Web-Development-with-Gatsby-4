import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../../../src/components/layout/Layout";

const Events = ({ data }) => {
  const events = data.allEventsJson.nodes;
  return (
    <Layout>
      <div className="prose max-w-5xl mx-auto py-8">
        <h1>Upcoming Events:</h1>
        {events.map(({ title, location, date, fields: { slug } }) => (
          <Link to={`/event${slug}`}>
            <h2>{title}</h2>
            <p>
              {date} - {location}
            </p>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Events;
export const query = graphql`
  {
    allEventsJson {
      nodes {
        location
        title
        date
        fields {
          slug
        }
      }
    }
  }
`;
