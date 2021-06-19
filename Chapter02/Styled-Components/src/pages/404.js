import React from "react"
import {Link} from "gatsby"

export default function NotFound(){
    return (
        <div>
            <h1>Oh no!</h1>
            <p>The page you were looking for does not exist.</p>
            <Link to="/">Take me home</Link>
        </div>
    )
}
