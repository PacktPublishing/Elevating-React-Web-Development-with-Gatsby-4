import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme === "blue" ? "blue" : "white")};
  }
`
export const wrapPageElement = ({ element }) => (
    <>
      <GlobalStyle theme="blue"/>
      {element}
    </>
  )
