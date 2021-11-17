import React from "react";
import renderer from "react-test-renderer";
import Layout from "../Layout";

test("loads and displays header", async () => {
  const layout = renderer.create(<Layout />).toJSON();

  expect(layout).toMatchSnapshot();
});
