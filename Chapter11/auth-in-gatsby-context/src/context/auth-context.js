import React, { useState, useContext } from "react";
import { navigate } from "gatsby";
import Login from "../components/Login";
const AuthContext = React.createContext();

export const AuthProvider = ({ ...props }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async () => {
    // Make authentication request here and only trigger the following if successful.
    setAuthenticated(true);
  };
  const logout = () => {
    setAuthenticated(false);
  };
  if (!authenticated) {
    return <Login login={login} />;
  }
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
