import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

 const fetchData = async() => {
    let promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await promise.json();

    setCards(data)
    console.log(data)
 }

 useEffect(() => {
    fetchData()
 }, [])

  return (
    <>
      <Navbar />
      <div className="container">
         {cards.map((card) => {
            return <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <p>UserId:{card.userId}</p>
            </div>
         })}
      </div>
    </>
  )
}

export default App
