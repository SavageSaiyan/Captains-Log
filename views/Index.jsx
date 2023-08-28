import React from 'react'

function Index() {
  return (
    <div>
        <form method='POST'action={`/${log._id}?_method=DELETE`} >
                                <input type="submit" value="DELETE" />
                            </form>
    </div>
  )
}

export default Index