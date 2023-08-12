import React from 'react'
import Cards from '../../Components/Cards/Cards'
import '../../Components/Cards/cards.css'

const Home = () => {

  const ejemplo = [{
    nombre: 'Franco',
    email: 'franc@gmail.com',
    phone: 26154878978
  },
  {
    nombre: 'Franco',
    email: 'franc@gmail.com',
    phone: 26154878978
  },
  {
    nombre: 'Franco',
    email: 'franc@gmail.com',
    phone: 26154878978
  },
  {
    nombre: 'Franco',
    email: 'franc@gmail.com',
    phone: 26154878978
  },
]

  return (
    <div className='home-cont'>
      <h1>Home</h1>
      <div>
        <Cards info={ejemplo}/>
      </div>
    </div>
  )
}

export default Home