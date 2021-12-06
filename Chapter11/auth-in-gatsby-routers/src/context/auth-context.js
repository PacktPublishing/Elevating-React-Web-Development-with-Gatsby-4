import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
const AuthContext = React.createContext();

export const AuthProvider = ({ ...props }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async () => {
    // Make authentication request here and only trigger the following if successful.
    setAuthenticated(true);
    navigate("/private")
  };
  const logout = () => {
    setAuthenticated(false);
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
