import React from 'react'
import Ionicon from 'react-ionicons'

function CreateBtn({onClick}) {
  return (
    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => onClick()}>
      <Ionicon
        className="rounded-circle"
        fontSize="30px"
        color={'#fff'}
        icon="ios-add"
      />
      创建一条新的记录
    </button>
  )
}

export default CreateBtn
