import React from 'react'
import ChevronDown from './assets/components/ChevronDown.jsx'
import ChevronUp from './assets/components/ChevronUp.jsx'
import ChevronsUp from './assets/components/ChevronsUp.jsx'
import ChevronsDown from './assets/components/ChevronsDown.jsx'
import HashTagRandom from './assets/components/HashTagRandom.jsx'
import Reset from './assets/components/Reset.jsx'


function App() {
  const [count, setCount] = React.useState(0)

   function upOnce() {
    setCount(prevCount => prevCount + 1)
   }
    function resetCount() {
      setCount(0)
    }
     function randomNumber() {
      const randomNumber = Math.floor(Math.random() * 101)
      setCount(randomNumber)
     }
     function downOnce() {
      setCount(prevCount => prevCount - 1)
     }
     function upTen() {
      setCount(prevCount => prevCount + 10)
     }
     function downTen() {
      setCount(prevCount => prevCount - 10)
     }

  return (
    <>
    <div className="container">
       <div><h2>Current value:</h2></div>
        <div className="count">{count}</div>
        <div className="card">
          <button onClick={upOnce}><ChevronUp/></button>
          <button onClick={upTen}><ChevronsUp/></button>
          <button onClick={resetCount}><Reset/></button>
          <button onClick={randomNumber}><HashTagRandom/></button> 
          <button onClick={downOnce}><ChevronDown/></button>
          <button onClick={downTen}><ChevronsDown/></button>  
      </div>
    </div>
    </>
  )
}

export default App
