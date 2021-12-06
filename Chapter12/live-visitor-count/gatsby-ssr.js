import React from "react";
import { StatsProvider } from "./src/context/stats-context";

export const wrapPageElement = ({ element }) => {
  return <StatsProvider>{element}</StatsProvider>;
};
