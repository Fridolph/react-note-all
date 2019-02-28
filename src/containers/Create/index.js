import React from 'react'

function Create({match}) {
  return (
    <div>
      <h2>this is the create page {match.params.id}</h2>
    </div>
  )
}

export default Create
