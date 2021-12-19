import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HelmetProvider } from "react-helmet-async";
import SEO from "../SEO";

HelmetProvider.canUseDOM = false;

test("Correctly Adds Meta Tags to Header", async () => {
  const mockTitle = "Elevating React with Gatsby";
  const mockDescription = "A starter blog demonstrating what Gatsby can do.";
  const context = {};
  render(
    <HelmetProvider context={context}>
      <SEO title={mockTitle} description={mockDescription} />
    </HelmetProvider>
  );

  const head = context.helmet;
  expect(head.meta.toString()).toMatchSnapshot();
});
