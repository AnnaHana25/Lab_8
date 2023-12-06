import React from "react"
import MenuItem from "./MenuItem"
import "./Menu.css"
import { useSelector } from "react-redux"

const Menu = () => {
  const list = useSelector((state) => state.menuItems)

  return (
    <ul className="menu">
      {list?.length &&
        list?.map((item, index) => {
          return (
            <li key={index}>
              <MenuItem text={item.text} keyItem={index} url={item.url} />
            </li>
          )
        })}
    </ul>
  )
}

export default Menu
