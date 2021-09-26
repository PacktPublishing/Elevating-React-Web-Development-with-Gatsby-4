import React from "react"
const Button = () => {
    const track = (e) => {
        typeof window !== "undefined" && window.gtag("event", "click", { /* Meta Data */ })
    }
    return (
        <button onClick={track}>Click Me</button>
    )
}
export default Button