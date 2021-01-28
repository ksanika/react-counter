import { React, useState } from "react";
import "./App.css"

const App = () => {
  const [counter, setCounter] = useState(0)

  const incrementValue = () => {
    if (counter >= 10) {
      alert("Value greater than 10 not allowed")
    } else {
      setCounter(counter + 1)
    }
  }

  const decreaseValue = () => {
    if (counter <= 0) {
      alert("Value less than 0")
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <div >
      <h2 className="counterHeading">Counter App</h2>
      <label className="displayCounter">{counter}</label>
      <div className="container">
        <button className="increaseBtn" onClick={incrementValue}>Increase</button>
        <button className="decreaseBtn" onClick={decreaseValue}>Decrease</button>
      </div>
      <div className="containerReset">
        <button className="increaseBtn" onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App;