import react from 'react';
import './App.css';
import Boxes from './components/Boxes';
import Winner from './components/Winner';

function App() {

  return (
    <>
    <h1 className='text-center mt-[30px] text-4xl font-bold text-orange-400'>Tic-Tac-Toe</h1>
    <Boxes/>
    </>
  )
}

export default App
