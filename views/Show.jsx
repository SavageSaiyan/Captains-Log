import React from 'react'

function Show() {
  return (
    <div>
        <h1>Title: {log.title}</h1>
        <h2>Entry: {log.entry}</h2>
        <h2>Is Ship Broken: {log.shipIsBroken} </h2>

        <a href="/Index">Back to Index</a>
    </div>
  )
}

export default Show