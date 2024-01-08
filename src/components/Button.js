
import React from 'react'

export default function Button(props) {
  return (
    <div className="btn-inner">
      <button >{props.value}</button>
    </div>
  )
}
