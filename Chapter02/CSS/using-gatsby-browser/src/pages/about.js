import React from "react"
import {Link} from "gatsby"

export default function About(){
    return (
        <div>
            <h1>My About Page</h1>
            <p>This is a sentence about me.</p>
            <Link to="/">Home</Link>
        </div>
    )
}

