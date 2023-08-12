import React from 'react'
import Card from '../Card/Card'
import './cards.css'


const Cards = ({info}) => {
  return (
    <div className='cards-cont'>
        {info.map((user) => <Card name={user.nombre} email={user.email} phone={user.phone}/>)}
    </div>
  )
}

export default Cards