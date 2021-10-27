import React from "react"
import { useGoal } from "gatsby-plugin-fathom"

const Button = () => {
    const handleGoal = useGoal("3BHZWBJK")
    return (
        <button onClick={() => handleGoal(100)}>Click Me</button>
    )
}
export default Button