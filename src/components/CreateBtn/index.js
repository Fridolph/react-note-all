import React from 'react'
import {Link} from 'react-router-dom'
import Ionicon from 'react-ionicons'

function CreateBtn({onClick}) {
  return (
    <button type="button" className="btn btn-primary btn-lg btn-block">
      <Link to="/create">
        <Ionicon
          className="rounded-circle"
          fontSize="30px"
          color={'#fff'}
          icon="ios-add"
        />
        <span style={{color: '#fff'}}>创建一条新的记录</span>
      </Link>
    </button>
  )
}

export default CreateBtn
