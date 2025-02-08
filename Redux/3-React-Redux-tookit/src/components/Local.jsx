import React from 'react'
import { useSelector } from 'react-redux';


function Local() {
     // for subscribe means whenever changes happen with counter variable then it called
    const {counterVal} = useSelector(store => store.counter);

  return (
    <h5 className="card-title text-center">Counter current value {counterVal}</h5>
  )
}

export default Local;