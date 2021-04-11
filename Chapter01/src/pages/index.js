import React from "react"
import {Link} from "gatsby"

export default function Index(){
    return (
        <div>
            <h1>My Landing Page</h1>
            <p>This is my landing page.</p>
            <Link to="/about">About me</Link>
        </div>
    )
}
