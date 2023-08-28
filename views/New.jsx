import React from 'react'

function New() {
  return (
    <div>
        <form action='/logs' method='POST'>
            Title <input type="text" name='title' />
            Entry <input type="textarea"name='entry' />
            ShipIsBroken <input type="checkbox"  name='shipIsBroken'/>
            <input type="submit" />
        </form>
    </div>
  )
}

module.exports = New