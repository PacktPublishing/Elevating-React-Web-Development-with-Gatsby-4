import React from "react"
import {Link} from "gatsby"
import StyleWrapper from "../components/StyleWrapper"

export default function NotFound(){
    return (
        <StyleWrapper>
            <h1>Oh no!</h1>
            <p>The page you were looking for does not exist.</p>
            <Link to="/">Take me home</Link>
        </StyleWrapper>
    )
}
