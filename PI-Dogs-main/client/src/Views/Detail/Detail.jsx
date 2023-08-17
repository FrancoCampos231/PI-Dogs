import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { cleanDetail, detailDogs } from '../../Redux/Actions/actions';
import NavBar from '../../Components/NavBar/NavBar';

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
    
      <div>
        <NavBar/>
        <h1>Detail</h1>
        <h2>{detail[0].name}</h2>
        <h2>{detail[0].height}</h2>
        <h2>{detail[0].weight}</h2>
        <h2>{detail[0].year}</h2>
        <h2>{detail[0].temperament}</h2>
        <h2>{detail[0].origin}</h2>
        <h2>{detail[0].breed_group}</h2>
        <img src={detail[0].image} alt="" />
        </div>
    )
  }
  else {
  return (
    
    <div>
      <NavBar/>
      <h1>Detail</h1>
      <h2>{detail.name}</h2>
      <h2>{detail.height}</h2>
      <h2>{detail.weight}</h2>
      <h2>{detail.year}</h2>
      <h2>{detail.temperament}</h2>
      <h2>{detail.origin}</h2>
      <h2>{detail.breed_group}</h2>
      <img src={detail.image} alt="" />
      </div>
  )
  }
}

export default Detail