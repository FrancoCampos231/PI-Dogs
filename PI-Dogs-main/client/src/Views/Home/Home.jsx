import React, { useEffect } from 'react'
import Cards from '../../Components/Cards/Cards'
import '../../Components/Cards/cards.css'
import './home.css'
import {useDispatch, useSelector} from 'react-redux'
import { getDogs, leaf, filterAPIDB, temperamentDog, filterWeight, filterTemperament } from '../../Redux/Actions/actions'
import NavBar from '../../Components/NavBar/NavBar'

const Home = () => {

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const alltemperamentDog = useSelector((state) => state.temperamentDogs);

  useEffect(() => {

    dispatch(getDogs())
    dispatch(temperamentDog())
    return () => {

    }

  }, [dispatch])

  const paginate = (event) => {
    dispatch(leaf(event.target.name))
  }

  const filteredAPiDB = (event) => {
    dispatch(filterAPIDB(event.target.value))
  }

  const filteredWieght = (event) => {
    dispatch(filterWeight(event.target.value))
  }

  const filteredTemp = (event) => {
    dispatch(filterTemperament(event.target.value))
  }

  return (
    <div className='home-cont'>
      <NavBar/>

      <h1>Home</h1>
      <div className='select-home'>
        <label className='home-text'>Api or DB: 
        <select name="filtered API and DB" onChange={filteredAPiDB}>
          <option value="Api">API</option>
          <option value="Db">DB</option>
          <option value="Ambas">Both API and DB</option>
        </select>
        </label>
        <label className='home-text'>Order for Weight: 
        <select name="Filtered to weight" onChange={filteredWieght}>
          <option value="Min">Weight Min</option>
          <option value="Max">Weight Max</option>
          <option value="Return">Return</option>
        </select>
        </label>
        <label className='home-text'>Order for temperament: 
        <select name="Temperament Filter" onChange={filteredTemp}>
          <option value="All">All</option>
          {alltemperamentDog.map((temp) => {
            return (
              <option value={temp.name}>{temp.name}</option>
            )
          })}
        </select>
        </label>

      </div>

      <div>
        <button name='prev' onClick={paginate} className='button-general'>Prev</button>
        <button name='next' onClick={paginate} className='button-general'>Next</button>
      </div>
      <div>
        <Cards info={allDogs}/>
      </div>
    </div>
  )
}

export default Home