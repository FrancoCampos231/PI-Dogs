import React, { useEffect, useState } from 'react'
import './create.css'
import { useDispatch, useSelector } from 'react-redux';
import { postDog, temperamentDog } from '../../Redux/Actions/actions';
import NavBar from '../../Components/NavBar/NavBar';

const Create = () => {

  
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(temperamentDog())
    console.log(temperamentDogs)
    return () => {
      
    }
    
  }, [dispatch])
  const temperamentDogs = useSelector((state) => state.temperamentDogs)
  
  const [selected, setSelected] = useState('Select')


  const [state, setState] = useState({
    name: '',
    image: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    year: '',
    origin: '',
    breedGroup: '',
    temp1: '',
    temp2: '',
    temp3: ''
  });

  const [error, setError] = useState({
    name: 'Campo Requerido',
    image: 'Campo Requerido',
    heightMin: 'Campo Requerido',
    heightMax: 'Campo requerido',
    weightMin: 'Campo Requerido',
    weightMax: 'Campo Requerido',
    year: 'Campo Requerido',
    temp1: 'Campo Requerido',
    temp2: 'Campo Requerido',
    temp3: 'Campo Requerido'
  })

  const handlerChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDog(state));
    console.log(state)
  }



  const disable = () => {
    let disabled = true;
    for(let err in error) {
      if(error[err] === '') disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  }
  


  const validate = (state, name) => {
    if (name === 'name') {
      if(state.name !== '') setError({...error, name: ''})
      else setError({...error, name: 'Campo requerido'})
    };
    if (name === 'image') {

      const regex = /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/g


      if(state.image !== '') setError({...error, image: ''})
      else {
        setError({...error, image: 'Campo Requerido'})
        return;
      }

      if(regex.test(state.image)) setError({...error, image: ''})
      else {
        setError({...error, image: 'Formato de url invalido'})
        return;
      }
    }
    if(name === 'heightMin') {
      if(isNaN(parseInt(state.heightMin))) return setError({...error, heightMin: 'Debe ser un numero'})

      if(parseInt(state.heightMin) > parseInt(state.heightMax)) setError({...error, heightMin: 'Debe ser mas chico que Max'})
      else {
        setError({...error, heightMin: ''})
        return;
      }

    }
    if(name === 'heightMax') {
      if(isNaN(parseInt(state.heightMax))) return setError({...error, heightMax: 'Debe ser un numero'})

      if(parseInt(state.heightMax) < parseInt(state.heightMin)) setError({...error, heightMax: 'Debe ser mas grande que Min'})
      else {
        setError({...error, heightMax: ''})
        return;
      }

    }
    if(name === 'weightMin') {
      if(isNaN(parseInt(state.weightMin))) return setError({...error, weightMin: 'Debe ser un numero'})


      if(parseInt(state.weightMin) > parseInt(state.weightMax)) setError({...error, weightMin: 'Debe ser mas chico que Max'})
      else {
        return setError({...error, weightMin: ''})
      }

    }
    if(name === 'weightMax') {
      if(isNaN(parseInt(state.weightMax))) return setError({...error, weightMax: 'Debe ser un numero'})


      
      if(parseInt(state.weightMax) < parseInt(state.weightMin)) setError({...error, weightMax: 'Debe ser mas grande que Min'})
      else {
        return setError({...error, weightMax: ''})
        
      }

    }
    if(name === 'year') {
      if(isNaN(parseInt(state.year))) setError({...error, year: 'Debe ser un numero'})
      else {
        setError({...error, year: ''})
      }
    }
    if(name === 'temp1') {
      if(state.temp1 === 'Select') setError({...error, temp1: 'Selecciona un temperamento'})
      else {
        setError({...error, temp1: ''})
      }
    }
    if(name === 'temp2') {
      if(state.temp2 === 'Select') setError({...error, temp2: 'Selecciona un temperamento'})
      else {
        setError({...error, temp2: ''})
      }
    }
    if(name === 'temp3') {
      if(state.temp3 === 'Select') setError({...error, temp3: 'Selecciona un temperamento'})
      else {
        setError({...error, temp3: ''})
      }
    }
  }


  return (
    <div className='create-cont'>
      <NavBar/>
      <form onSubmit={handleSubmit}>
        <label >Name:</label>
        <input name='name' onChange={handlerChange} type="text" className='create-cont-input'/>
        <label className='create-error'>{error.name}</label>
        <label >Image:</label>
        <input name='image' onChange={handlerChange} type="text" className='create-cont-input'/>
        <label className='create-error'>{error.image}</label>
        <div>
          <label >Height</label>
          <label >Min:</label>
          <input name='heightMin' onChange={handlerChange} type="text" className='create-cont-input'/>
          <label className='create-error'>{error.heightMin}</label>
          <label>-</label>
          <label >Max:</label>
          <input name='heightMax' onChange={handlerChange} type="text" className='create-cont-input'/>
          <label className='create-error'>{error.heightMax}</label>
        </div>
        <div>
          <label >Weight</label>
          <label >Min:</label>
          <input name='weightMin' onChange={handlerChange} type="text" className='create-cont-input'/>
          <label className='create-error'>{error.weightMin}</label>
          <label>-</label>
          <label >Max:</label>
          <input name='weightMax' onChange={handlerChange} type="text" className='create-cont-input'/>
          <label className='create-error'>{error.weightMax}</label>
        </div>
        <label >Years:</label>
        <input name='year' onChange={handlerChange} type="text" className='create-cont-input'/>
        <label className='create-error'>{error.year}</label>
        <label >Origin:</label>
        <input name='origin'  onChange={handlerChange} type="text" className='create-cont-input'/>
        <label ></label>
        <label >Group:</label>
        <input name='breedGroup' onChange={handlerChange} type="text" className='create-cont-input'/>
        <label ></label>
        <label >Temperament: </label>
        <select name="temp1" onChange={handlerChange} defaultValue={selected}>
          <option value="Select" >Select</option>
          {temperamentDogs.map((t) => {
            if(t.id <= 41) {
              return (
                <option value={t.name} key={t.id}>{t.name}</option>
              )
            }
          }) }
        </select>
        <label className='create-error'>{error.temp1}</label>
        <select name="temp2" onChange={handlerChange} defaultValue={selected}>
          <option value="Select" >Select</option>
          {temperamentDogs.map((t) => {
            if(t.id > 41 && t.id <=81) {
              return (
                <option value={t.name} key={t.id}>{t.name}</option>
              )
            }
          }) }
        </select>
        <label className='create-error'>{error.temp2}</label>
        <select name="temp3" onChange={handlerChange} defaultValue={selected}>
          <option value="Select" >Select</option>
          {temperamentDogs.map((t) => {
            if(t.id >= 82) {

              return (
                <option value={t.name} key={t.id}>{t.name}</option>
              )
            }
          }) }
        </select>
        <label className='create-error'>{error.temp3}</label>

        <input disabled={disable()}className='create-button'  type="submit" />
      </form>
    </div>
  )
}

export default Create;