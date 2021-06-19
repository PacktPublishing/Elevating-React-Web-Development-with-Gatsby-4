import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/Layout";

export default function Index() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-black pb-4">My Landing Page</h1>
        <p className="mb-4">This is my landing page.</p>
        <Link to="/about" className="btn">About me</Link>
      </div>
    </Layout>
  );
}
