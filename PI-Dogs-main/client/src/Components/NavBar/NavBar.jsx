import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'


const NavBar = () => {
  return (
    <div className='nav-cont'>
      <div>
        <Link to={'/'}>Log Out</Link>
      </div>
      <div className='nav-link-cont'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/create'}>Formulario</Link>
      </div>
    </div>
  )
}

export default NavBar