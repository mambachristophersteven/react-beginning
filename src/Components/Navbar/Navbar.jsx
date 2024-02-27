import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/day'>Day</Link>
        </li>
        <li>
        <Link to='/calculator'>Calculator</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default Navbar