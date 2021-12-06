import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
const AuthContext = React.createContext();

export const AuthProvider = ({ ...props }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Make authentication request here and only trigger the following if successful.
    setAuthenticated(true);
    navigate("/");
  };
  const logout = () => {
    setAuthenticated(false);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authenticated,
      }}
      {...props}
    />
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
