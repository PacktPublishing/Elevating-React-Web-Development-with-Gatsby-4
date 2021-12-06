import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <h1>Oh no!</h1>
      <p>The page you were looking for does not exist.</p>
      <Link to="/">Take me home</Link>
    </Layout>
  );
}
