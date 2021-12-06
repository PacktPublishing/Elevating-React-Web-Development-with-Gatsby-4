import React from "react";
import { AuthProvider } from "./src/context/auth-context";
import "./src/styles/global.css";
import webVitals from "./src/utils/web-vitals";

webVitals();

export const wrapPageElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>;
};
