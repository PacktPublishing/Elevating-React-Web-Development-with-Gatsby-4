import React from "react";
import { navigate } from "@reach/router"
import { useAuth } from "./auth-context";

const PrivateRoute = ({
  component: Component,
  location,
  basepath,
  ...rest
}) => {
  const { authenticated } = useAuth();
  if (!authenticated) {
    navigate("/login");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
