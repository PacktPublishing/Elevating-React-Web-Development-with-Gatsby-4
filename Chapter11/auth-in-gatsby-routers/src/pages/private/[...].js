import React from "react";
import { Router } from "@reach/router";
import Layout from "../../components/layout/Layout";

import PrivateRoute from "../../components/PrivateRoute";
import { useAuth } from "../../context/auth-context";

const LoginPage = () => {
  const { login } = useAuth();
  return (
    <Layout>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </Layout>
  );
};

const AuthenticatedPage = () => {
  const { logout } = useAuth();
  return (
    <Layout>
      <h1>Authenticated Page</h1>
      <button onClick={logout}>Logout</button>
    </Layout>
  );
};

function PageWithRouter() {
  const basepath = "/private";
  return (
    <Router basepath={basepath}>
      <LoginPage path="login" />
      <PrivateRoute
        basepath={basepath}
        component={AuthenticatedPage}
        path="/"
      />
    </Router>
  );
}

export default PageWithRouter;
