import React from "react"
import {Link} from "gatsby"
import StyleWrapper from "../components/StyleWrapper"

export default function About(){
    return (
        <StyleWrapper>
            <h1>My About Page</h1>
            <p>This is a sentence about me.</p>
            <Link to="/">Home</Link>
        </StyleWrapper>
    )
}

