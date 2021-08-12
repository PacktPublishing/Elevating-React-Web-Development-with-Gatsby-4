import React from "react";
import { Helmet } from "react-helmet-async";

export default function NoRobots() {
  return (
    <Helmet
      meta={[
        {
          name: `robots`,
          content: "noindex",
        },
      ]}
    />
  );
}
