import React from 'react'
import "./card.scss"

const Card = ({src, course}) => {
  return (
    <div className='categories__card'>
        <img src={src} alt={course} />
        <p>{course}</p>
    </div>
  )
}

export default Card