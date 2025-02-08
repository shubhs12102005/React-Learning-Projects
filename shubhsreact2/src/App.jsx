import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(0);

const addValue = () => {
  setCounter(counter + 1);
}

const lessValue = () => {
  if(counter > 0){
    setCounter(counter - 1);
  }
}

 let count = 0;
  return (
    <>
    <h1>Counter Value: {counter}</h1>
    <div>
      <button onClick={addValue}>Increment</button>
      <button onClick={lessValue}>Decrement</button>
      <p>{counter}</p>
    </div>
    </>
  )
}

export default App
