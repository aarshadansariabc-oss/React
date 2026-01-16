import React from 'react'

const App = () => {

  function btnClicked(val){
    console.log(val)
  }
  return (
    <div>
      <input onChange={
        function(elem){
          btnClicked(elem.target.value)
        }
      } type="text" placeholder='Enter Name' />
      <div onMouseMove={ (elem) => {
        console.log(elem.clientX)
      }} className="box">

      </div>
    </div>
  )
}

export default App
