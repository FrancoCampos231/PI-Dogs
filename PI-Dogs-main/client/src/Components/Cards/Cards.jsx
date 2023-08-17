import React from 'react'
import Card from '../Card/Card'
import './cards.css'


const Cards = ({info}) => {
  return (
    <div className='cards-cont'>
        {info?.map((dog) => <Card name={dog.name} image={dog.image} weight={dog.weight} temperament={dog.temperament} id={dog.id}/>)}
    </div>
  )
}

export default Cards