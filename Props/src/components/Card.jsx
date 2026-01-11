import React from 'react'

const Card = (props) => {
    
  return (
        <div className="card">
      <img src={props.image} alt="" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ut unde odit commodi ullam! Quibusdam vitae quae tempore voluptates excepturi.</p>
      <button>View Profile</button>
        </div>
        
  )
}

export default Card