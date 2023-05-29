import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../Navbar/Navbar.css'
import decode from 'jwt-decode'
import { FaStackOverflow } from 'react-icons/fa'

import { FaSearch } from 'react-icons/fa'
import Avatar from '../Avatar/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../Actions/currentUser'

const Navbar = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    let User = useSelector((state) => (state.currentUserReducer))

    const handleLogout = () => {
        dispatch({type:'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodeToken = decode(token)
            if(decodeToken.exp * 1000 < new Date().getItem()) {
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

    return (
      <div className='main-nav'>
      <div className='navbar'>
          <Link to='/' className='nav-btn align'>
              <FaStackOverflow  className='logo'/>
                    <h3 className='head'>StackOverflow</h3>
          </Link>
          <Link to='/' className='nav-item nav-btn'>About</Link>
          <Link to='/' className='nav-item nav-btn'>Products</Link>
          <Link to='/' className='nav-item nav-btn'>For Teams</Link>
          <form className='align'>
              <input type="text" placeholder='Search here' />
              <FaSearch style={{marginLeft:"10px"}} className='sr'/>

          </form>
          {User === null ?
              <Link to='/Auth' className='logbtn nav-links ' >Log In</Link> :
              
              <div className='align '>
                        <Avatar backgroundColor='#009dff' px='11px' py='7px' borderRadius='50%' >
                            <Link to={`/Users/${User?.result._id}`} style={{textDecoration:'none',color:"#fff"}} className='ava' >
                                {User.result.name.charAt(0).toUpperCase()}
                            </Link>
                        </Avatar>
                  <button onClick={handleLogout} className='logbtn'>Log out</button>
              </div>}
         
            </div>
        </div>
  )
}

export default Navbar
