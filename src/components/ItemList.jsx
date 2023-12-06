import React, { useEffect, useState } from "react"
import "./ItemList.css"
const ItemList = ({ title }) => {
  const [breweries, setBreweries] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    getList(page)
  })

  const getList = (pageNumber) => {
    const url = `https://api.openbrewerydb.org/v1/breweries?page=${pageNumber}`

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then(setBreweries)
  }
  return (
    <div className="itemlist">
      <h1>{title}</h1>

      <button
        onClick={() => {
          setPage(page + 1)
          getList(page + 1)
        }}
      >
        Get list
      </button>
      {breweries.length &&
        breweries.map((item) => {
          return <div key={item.id}>Name: {item.name}</div>
        })}
    </div>
  )
}

export default ItemList
