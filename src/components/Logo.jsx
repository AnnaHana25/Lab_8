import React from "react"
import { useSelector } from "react-redux"

const Logo = () => {
  const url = useSelector((state) => state.imageUrl)
  console.log(url)
  return <img src={url} alt={"logo"} width="50px" />
}

export default Logo
