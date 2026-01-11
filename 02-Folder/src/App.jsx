import React from 'react'
import Card from './components/Card.jsx'
import Navbar  from './components/Navbar.jsx'

const App = () => {

  const user = "Adarsh"
  const age = 18
  return (
    <div>
      <Navbar />
      <Card />
    </div>
  )
}

export default App