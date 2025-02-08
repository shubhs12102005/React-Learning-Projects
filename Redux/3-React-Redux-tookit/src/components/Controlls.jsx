import React from 'react'
import { useDispatch } from 'react-redux';
import {useRef} from 'react';
import { counterActions } from '../store/counter';
import { privacyActions } from '../store/privacy';


function Controlls() {
  
  // for dispatch means it call reducer by providing action
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncrement = () => {
     dispatch(counterActions.increment());
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handleAdd = () => {
    dispatch(counterActions.add(
      {num: inputRef.current.value}
    ));
    inputRef.current.value = '';
  }

  const handleSubtract = () => {
    dispatch(counterActions.subtract(
      {num: inputRef.current.value}
    ));
    inputRef.current.value = '';
  }

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  }


  return (
    <>
      <div className="d-flex justify-content-center gap-4 p-4">
        <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
        <button onClick={handleDecrement}  className="btn btn-primary">Decrement</button>
        <button onClick={handlePrivacy}  className="btn btn-warning">Privacy</button>
      </div>

      <div className='d-flex justify-content-center gap-2'>
        <input ref={inputRef} type="text" placeholder='Enter number' className='input'  />
        <button onClick={handleAdd} className="btn btn-info ">Add</button>
        <button onClick={handleSubtract} className="btn btn-danger">Subtract</button>
      </div>
    </>
  )
}

export default Controlls