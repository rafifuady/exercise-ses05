import axios from 'axios';

export const incrementAction = () => {
    return {
      type: 'INCREMENT',
      payload: 1
    }
  }
  
  export const decrementAction = () => ({
    type: 'DECREMENT',
    payload: 1
  })
  
  export const changeName = (name) => ({
    type: 'CHANGENAME',
    payload: name
  })

  export const fetchSwapi = () => ({
    type: 'FETCH_SWAPI'
  })
  export const fetchSwapiAction = () => {
    return (dispatch) => {
      dispatch(fetchSwapi())
      axios.get('https://swapi.co/api/people')
      .then( res =>{
        dispatch({
          type: 'FETCH_SWAPI_SUCCESS',
          payload: res.data.results
        })
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_SWAPI_FAILED'
        })
      throw err
    })
    }
  }
  
export const fetchProfileData = (params) => {
  return dispatch => {
    dispatch({
      type: 'FETCH_SWAPI_DETAIL'
    })
    axios.get(params)
    .then(res => {
      dispatch({
        type: 'FETCH_SWAPI_DETAIL_SUCCESS',
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_SWAPI_DETAIL_FAILED'
      })
      throw err
    })
  }
}

export const updateUrlDetailAction = urlDetail => ({
  type: 'UPDATE_URL_DETAIL',
  payload: urlDetail
})
