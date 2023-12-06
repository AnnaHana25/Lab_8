import React from "react"
import "./Footer.css"
import Menu from "./Menu"
const Footer = ({ title }) => {
  return (
    <div className="footer">
      <>
        <div>
          <h1>{title}</h1>
        </div>
        <Menu />
      </>
    </div>
  )
}

export default Footer
