import React from 'react'

function EditPage({match}) {
  return (
    <div>
      edit page {match.params.id}
    </div>
  )
}

export default EditPage
