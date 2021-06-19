import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout/Layout"

export default function Index(){
    return (
        <Layout>
            <h1>My Landing Page</h1>
            <p>This is my landing page.</p>
            <Link to="/about">About me</Link>
        </Layout>
    )
}
