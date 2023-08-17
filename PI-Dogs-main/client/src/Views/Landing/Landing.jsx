import React from 'react'
import {Link} from 'react-router-dom';
import './landing.css'


const Landing = () => {
  return (
    <div className='cont-landing'>
      <h1 className='landing-text'>Welcome to Page Dogs!!!</h1>
      <Link to={'/home'}>
      <button className='button-general'>
        Home 
      </button>
      </Link>
    </div>
  )
}

export default Landing