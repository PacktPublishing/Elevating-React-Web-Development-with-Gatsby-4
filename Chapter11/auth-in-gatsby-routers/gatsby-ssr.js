import React from "react";
import { AuthProvider } from "./src/context/auth-context";

export const wrapPageElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>;
};
