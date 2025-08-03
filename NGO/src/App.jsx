import { useState } from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Components/Form'
import About from './Components/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/form' element={<Form />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
