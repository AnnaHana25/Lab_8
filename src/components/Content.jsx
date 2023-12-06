import React from "react"
import "./Content.css"
import ItemList from "./ItemList"
const Content = ({ title }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      <ItemList />
    </div>
  )
}

export default Content
