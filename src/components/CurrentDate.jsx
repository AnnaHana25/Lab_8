import React from "react"

const CurrentDate = () => {
  const currentDate = new Date()
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  const formattedDate = currentDate.toLocaleDateString("uk-UA", options)

  return <div>{formattedDate}</div>
}

export default CurrentDate
