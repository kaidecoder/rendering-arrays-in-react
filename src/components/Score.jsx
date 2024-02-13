import React from 'react'
import Item from './Item'

const Score = (props) => {
    console.log(props)
  return (
    <div>
        {/* {props.scores.forEach(score => console.log(score.score, score.date) )}  */}
        {props.scores.map(score => <Item scores={score.score} date={score.date} />)} 
        
    </div>
  )
}

export default Score