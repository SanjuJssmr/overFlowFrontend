import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSideBar.css'
import { FaGlobeAmericas } from 'react-icons/fa'
const LeftSideBar = () => {
  return (
    <div className='side-nav'>
      <nav className='main-nav-bars' >
        <NavLink to='/' className='nav-bar' activeclassname='active'>
          <p>Home</p>
        </NavLink>
      </nav>
      <nav className='nav-bars'>
        <div ><p>PUBLIC</p></div>
        <NavLink to='/Questions' className='nav-bar' activeclassname='active'>
         <FaGlobeAmericas style={{marginRight:"10px"}}/>
          <p >Questions</p>
        </NavLink>
        <NavLink to='/Tags' className='nav-bar' activeclassname='active'>
          <p>Tags</p>
        </NavLink>
        <NavLink to='/Users' className='nav-bar' activeclassname='active'>
          <p>Users</p>
        </NavLink>
        
      </nav>
    </div>
  )
}

export default LeftSideBar