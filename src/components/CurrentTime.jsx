import React, { useState, useEffect } from "react"

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" }
  const formattedTime = currentTime.toLocaleTimeString("uk-UA", options)

  return <div>{formattedTime}</div>
}

export default CurrentTime
