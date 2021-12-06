import React from "react";
import { navigate } from "gatsby";
import { useAuth } from "../context/auth-context";

const PrivateRoute = ({
  component: Component,
  location,
  basepath,
  ...rest
}) => {
  const { authenticated } = useAuth();
  if (!authenticated) {
    navigate(basepath + "/login");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
