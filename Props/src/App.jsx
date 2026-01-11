import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className="parent">
      <Card user ='Saquib Bhai' image = "https://plus.unsplash.com/premium_photo-1731535536620-cce476ad4c70?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user = 'Arshad ..' image = "https://images.unsplash.com/photo-1743105351262-3f9e6944920a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = 'Adarsh Bhai' image ="https://images.unsplash.com/photo-1719319567797-3b414769a0c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8" />
    </div>
  )
}

export default App