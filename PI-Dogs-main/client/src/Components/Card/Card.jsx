import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';

const Card = ({name, image, weight, temperament, id}) => {

  const trueImage = (image) => {
    if (!image) {
      return 'https://dibujafacil.com/wp-content/uploads/2022/03/Como-Dibuja-Un-Perrito-Tierno-Facil-Paso-a-Paso.jpg'
    }
    return image
  }

  return (
    <div className='card-cont'>
      <Link to={`/detail/${id}`}>
        <div className='card-title-cont'>
            <h4>{name}</h4>
        </div>
        <div className='card-info-cont'>
            <img src={trueImage(image)} alt={name} width='150' height='150'/>
            <p>Weight: {weight}</p>
            <p>Temperament: {temperament}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card