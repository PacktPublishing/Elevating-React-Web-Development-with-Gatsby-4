import React from "react";
import { graphql, Link } from "gatsby";

const Events = ({ data }) => {
  const events = data.allEventsJson.nodes;
  return (
    <div className="prose max-w-5xl">
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
  );
};

export default Events
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