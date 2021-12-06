import React from "react";
import Layout from "../components/layout/Layout";

export default function Authenticated() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24 text-center">
        <p>An authenticated Page</p>
      </div>
    </Layout>
  );
}
