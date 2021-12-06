import React from "react";
import { screen } from "@testing-library/react";
import {render} from "../../test-utils"
import "@testing-library/jest-dom";
import Index from "../index";

test("Renders Index Page with correct name", async () => {
  const data = {
    site: {
      siteMetadata: { name: "My Name", role: "My Role" },
    },
  };
  render(<Index data={data} />);

  expect(screen.getByText(data.site.siteMetadata.name));
});
