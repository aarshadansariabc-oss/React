import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className="parent">
      <Card user ="Adarsh" age = {18} />
      <Card user = "Saquib" age = {21}/>
      
    </div>
  )
}

export default App