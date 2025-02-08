import React from 'react'
import { useDispatch } from 'react-redux';
import {useRef} from 'react';

function Controlls() {
  
  // for dispatch means it call reducer by providing action
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  }

  const handleAdd = () => {
    dispatch({ type: 'ADD', payload: {num: inputRef.current.value}});
    inputRef.current.value = '';
  }

  const handleSubtract = () => {
    dispatch({ type: 'SUBTRACT', payload: {num: inputRef.current.value}});
    inputRef.current.value = '';
  }

  const handlePrivacy = () => {
    dispatch({ type: 'PRIVACY'});
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