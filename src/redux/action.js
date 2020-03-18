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