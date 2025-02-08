import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="p-4 text-3xl font-bold underline">
      Hello world!
     </h1>  

    <Card name="Shubham" cou={count}/> 
     
    </>
  )
}

export default App
