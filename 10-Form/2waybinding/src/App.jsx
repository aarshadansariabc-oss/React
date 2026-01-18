import React from 'react'
import { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState('')
  
  const OnSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submited by ",first)
    setfirst('')
  }

  return (
    <div>
      <form onSubmit={(e) => {OnSubmit(e)}}>
        <input value={first} onChange={ (e) => { setfirst(e.target.value)}} type="text" placeholder="Enter your Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App
