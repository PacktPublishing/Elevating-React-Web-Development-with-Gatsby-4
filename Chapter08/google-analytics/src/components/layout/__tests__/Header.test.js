import React from "react";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from "../Header";

test("Renders header", async () => {
  render(<Header />);

  expect(screen.getByText('Site Header'))
});
