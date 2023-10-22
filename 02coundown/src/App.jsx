
import { useState } from 'react';

import './app.css'




function App() {

  let [counter,setCounter]= useState(15)
  // let counter = 5

  const addValue= () =>{

    counter= counter + 1;
    setCounter(counter)
  }

  const remobeValue=() =>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai or code</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue} >Add value</button>
      <br />

      <button
      onClick={remobeValue} >Remove value {counter} </button>

    </>
  )
}

export default App
