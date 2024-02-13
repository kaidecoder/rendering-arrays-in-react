import React from 'react'

const Learner = (props) => {
  return (
    <>
    <div><h1>Name: {props.name}</h1></div>
    <div><h2>Bio: {props.bio}</h2></div>

    </>
  )
}

export default Learner