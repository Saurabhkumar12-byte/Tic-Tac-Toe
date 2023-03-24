import { createContext, useState } from 'react'
import Board from './Components/Board'
// import Reset from './Components/Reset'
import './App.css'
import Score from './Components/Score';
import Reset from './Components/Reset';

function App() {
  
 
  return (
    <div className="App">
      
      <Score ></Score>
      <Board ></Board>
      <Reset></Reset>
    </div>
  )
}

export default App
