import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
            <img src="./src/assets/logo.png" alt="logo" />
        </div>
        <div className="navbar-top">
        <ul className="navbar-ul">
            <Link to={'/'} className='link'><li>Home</li></Link>
            <li>News</li>
            <li>About</li>
            <li>Footer</li>
        </ul>
      </div>
      </div>
      
    </div>
  )
}

export default Header
