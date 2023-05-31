import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './LeftSideBar.css'
import { RiMenuUnfoldLine } from 'react-icons/ri'
import {VscChromeClose} from 'react-icons/vsc'
import { FaGlobeAmericas } from 'react-icons/fa'
const LeftSideBar = () => {

  const [barState, setBarState] = useState(false)
  const showBar = () => {
  setBarState(!barState)
}

  return (
    <div className='mainSide'>
     <div className='toggle'  onClick={showBar} > 
        {barState ? <RiMenuUnfoldLine  /> :
          <VscChromeClose  />}
      </div>
    <div className={!barState ? 'side-nav' : 'mob-nav' }   >
     
      <nav className={barState ? 'main-nav-bars' :""} >
        <NavLink to='/' className='nav-bar' activeclassname='active'>
          <p>Home</p>
        </NavLink>
      </nav>
      <nav className={barState ? 'nav-bars' : ""} >
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
           <NavLink to='/ChatBot' className='nav-bar' activeclassname='active'>
            <p>ChatBot</p>
          </NavLink>
      </nav>
      </div>
    </div>
  )
}

export default LeftSideBar
