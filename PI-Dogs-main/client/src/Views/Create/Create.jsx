import React, { useState } from 'react'
import './create.css'

const Create = () => {

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [error, setError] = useState({
    name: 'Campo Requerido',
    email: 'Campo Requerido',
    phone: ''
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
    if (name === 'email') {

      const regex = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

      if(state.email !== '') setError({...error, email: ''})
      else {
        setError({...error, email: 'Campo requerido'})
        return;
      }

      if(regex.test(state.email)) setError({...error, email: ''})
      else {
        setError({...error, email: 'Formato de email invalido'})
        return;
      }
    }
    if(name === 'phone'){
      if(isNaN(parseInt(state.phone))) setError({...error, phone: 'Debe ser un numero'})
      else {
        setError({...error, phone: ''})
      }
    }
  }

  return (
    <div className='create-cont'>
      <form onSubmit={handleSubmit}>
        <label >Name:</label>
        <input name='name' onChange={handlerChange} type="text" />
        <label className='create-error'>{error.name}</label>
        <label >Email:</label>
        <input name='email' onChange={handlerChange} type="text" />
        <label className='create-error'>{error.email}</label>
        <label >Phone:</label>
        <input name='phone' onChange={handlerChange} type="text" />
        <label className='create-error'>{error.phone}</label>
        <input disabled={disable()}className='create-button'  type="submit" />
      </form>
    </div>
  )
}

export default Create;