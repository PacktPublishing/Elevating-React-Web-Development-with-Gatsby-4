import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black pb-4">My About Page</h1>
        <p className="mb-6">This is a sentence about me.</p>
        <Link to="/" className="btn">Home</Link>
      </div>
    </Layout>
  );
}
