import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Footer";

test("loads and displays footer", async () => {
  const footer = renderer.create(<Footer />);

  expect(footer).toMatchSnapshot();
});
