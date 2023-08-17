import axios from 'axios'
import { CLEAN_DETAIL, DETAILS_DOG, FILTER_API_DB, FILTER_TEMPERAMENT, FILTER_WEIGHT, GET_DOGS, PAGINATE, TEMP_DOGS } from './actions-types'

export function getDogs() {
    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/dogs/')
            console.log(response.data)
            dispatch({
                type: GET_DOGS,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function temperamentDog() {
    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/temperament/')
            console.log(response.data)
            dispatch({
                type: TEMP_DOGS,
                payload: response.data
            }) 
        } catch (error) {
            console.log(error)
        }
    }
}

export function postDog(state) {
    return async function(dispatch){
        try {
            const response = await axios.post('http://localhost:3001/dogs/', state)
        } catch (error) {
            console.log(error)
        }
    }
}

export function leaf(direction) {
    return async function(dispatch) {
        try {
            dispatch({
                type: PAGINATE,
                payload: direction
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterAPIDB(order) {
    return async function(dispatch) {
        try {
            dispatch({
                type: FILTER_API_DB,
                payload: order
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterWeight(weight) {
    return async function(dispatch) {
        try {
            dispatch({
                type: FILTER_WEIGHT,
                payload: weight
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterTemperament(temp) {
    return async function(dispatch) {
        try {
            dispatch({
                type: FILTER_TEMPERAMENT,
                payload: temp
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function detailDogs(id) {
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`)
            console.log(response.data)
            dispatch({
                type: DETAILS_DOG,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export const cleanDetail = () => {
    try {
      return {
        type: CLEAN_DETAIL,
      };
    } catch (error) {
      alert(error.message);
    }
  };
