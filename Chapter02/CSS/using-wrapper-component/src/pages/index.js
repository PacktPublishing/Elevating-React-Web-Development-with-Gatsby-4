import React from "react"
import {Link} from "gatsby"
import StyleWrapper from "../components/StyleWrapper"

export default function Index(){
    return (
        <StyleWrapper>
            <h1>My Landing Page</h1>
            <p>This is my landing page.</p>
            <Link to="/about">About me</Link>
        </StyleWrapper>
    )
}
