import React from "react";
import { StatsProvider } from "./src/context/stats-context";
import "./src/styles/global.css";

export const wrapPageElement = ({ element, props }) => {
  return <StatsProvider location={props.location}>{element}</StatsProvider>;
};
