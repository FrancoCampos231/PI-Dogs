import React from 'react';
import './card.css';

const Card = ({name, email, phone}) => {
  return (
    <div className='card-cont'>
        <div className='card-title-cont'>
            <h4>{name}</h4>
        </div>
        <div className='card-info-cont'>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    </div>
  )
}

export default Card