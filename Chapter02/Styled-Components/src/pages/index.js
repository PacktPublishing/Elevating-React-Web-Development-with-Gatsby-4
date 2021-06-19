import React from "react"
import {Link} from "gatsby"
import styled from "styled-components";

const Box = styled.div`
  background-color: #333;
  padding: 20px;

  h1 {
    color: #fff;
    margin: 0 0 10px;
    padding: 0;
  }
  
  p {
      color: #fff
  }
`

export default function Index(){
    return (
        <Box>
            <h1>My Landing Page</h1>
            <p>This is my landing page.</p>
            <Link to="/about">About me</Link>
        </Box>
    )
}
