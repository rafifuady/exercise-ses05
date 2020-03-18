import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction, changeName } from '../../redux/action';

import '../../App'

const Count = () => {
  
  const dispatch = useDispatch()
  
  const selector = useSelector((state) => {
    return {
      num: state.count,
      user: state.user
    } 
  })
  
  const increment = () => {
    dispatch(incrementAction())
  }
  
  const decrement = () => {
    dispatch(decrementAction())
  }
  
  const handleChangeName = () => {
    dispatch(changeName('Rudi'))
  }
  
  return(
    <div style={{textAlign:'center'}}>
      <div>{selector.user.name}</div>
      <div style={{marginBottom: '25px'}}>
        {selector.num}
      </div>
      
      <button onClick={increment} style={{marginRight: '20px'}}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={handleChangeName} >change Name to Rudi</button>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    num: state.count,
    user: state.user
  }
}

const mapDispatchToProps = {
  incrementAction,
  decrementAction,
  changeName
}

export default Count