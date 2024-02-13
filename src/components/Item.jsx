import React from 'react'

const Item = (props) => {
  return (
    <>
        <div><h3>Score: {props.scores}</h3></div>
        <div><h3>Date: {props.date}</h3></div>
    </>
  )
}

export default Item