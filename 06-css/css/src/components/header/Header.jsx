import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className= {styles.h}>
      This is our page
      <button className= {styles.btn}> Login</button>
    </div>
  )
}

export default Header
