import React from 'react'
import './App.css'

function App() {

  return (
  <>
    <div className='container'>
        <img src="./twitter.png" alt="Twitter Logo" className='twitter'/>
        <h2 id='heading'>Sign in to Twitter</h2>

        <div className='signup'>
          <img src="./google.jpeg" alt="Google Logo" className='twitter'/>
          <p className='para'>Sign in with Google</p>
        </div>

        <div className='signup'>
          <img src="./apple.png" alt="Google Logo" className='twitter'/>
          <p className='para'>Sign in with Google</p>
        </div>

        <h3>-------------------Or--------------------</h3>
        <input type="text" placeholder=' Phone Number Or username' id='username'/>

        <button id='btn'>Next</button>

        <p id='signup'>Don't Have an Account? Signup</p>

    </div>
  </>

  )
}

export default App
