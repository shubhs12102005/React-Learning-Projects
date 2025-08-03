import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import DataContext from './Context/DataContext'

function App() {

  return (
    <DataContext>
      <Header />
      <Main />
    </DataContext>
  )
}

export default App
