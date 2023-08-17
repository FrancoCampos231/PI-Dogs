import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { cleanDetail, detailDogs } from '../../Redux/Actions/actions';
import NavBar from '../../Components/NavBar/NavBar';
import './detail.css'

const Detail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detailDog)

  useEffect(() => {

    dispatch(detailDogs(id));
    return () => {
      dispatch(cleanDetail());
    }

  }, [dispatch, id])
  if(detail[0]) {
    return (
    
      <div >
        <NavBar/>
        <h1 className='detail-title'>Detail</h1>
        <div className='detail-cont'>
          <div className='detail-image'>
            <img src={detail[0].image} alt="" />
          </div>
          <div className='detail-text'>
            <div className='detail-div'>
              <h2>Name: </h2>
              <h3>{detail[0].name}</h3>
            </div>
            <div className='detail-div'>
              <h2>Height: </h2>
              <h3>{detail[0].height} m</h3>
            </div>
            <div className='detail-div'>
              <h2>Weight: </h2>
              <h3>{detail[0].weight} Kg</h3>
            </div>
            <div className='detail-div'>
              <h2>Years: </h2> 
              <h3>{detail[0].year}</h3>
            </div>
            <div className='detail-div'>
              <h2>Temperament: </h2>
              <h3>{detail[0].temperament}</h3>
            </div>
            <div className='detail-div'>
              <h2>Origin: </h2>
              <h3>{detail[0].origin}</h3>
            </div>
            <div className='detail-div'>
              <h2>Group: </h2>
              <h3>{detail[0].breed_group}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
  return (
    
    <div >
    <NavBar/>
    <h1 className='detail-title'>Detail</h1>
    <div className='detail-cont'>
      <div className='detail-image'>
        <img src={detail.image} alt="" />
      </div>
      <div className='detail-text'>
        <div className='detail-div'>
          <h2>Name: </h2>
          <h3>{detail.name}</h3>
        </div>
        <div className='detail-div'>
          <h2>Height: </h2>
          <h3>{detail.height} m</h3>
        </div>
        <div className='detail-div'>
          <h2>Weight: </h2>
          <h3>{detail.weight} Kg</h3>
        </div>
        <div className='detail-div'>
          <h2>Years: </h2> 
          <h3>{detail.year}</h3>
        </div>
        <div className='detail-div'>
          <h2>Temperament: </h2>
          <h3>{detail.temperament}</h3>
        </div>
        <div className='detail-div'>
          <h2>Origin: </h2>
          <h3>{detail.origin}</h3>
        </div>
        <div className='detail-div'>
          <h2>Group: </h2>
          <h3>{detail.breed_group}</h3>
        </div>
      </div>
    </div>
  </div>
  )
  }
}

export default Detail