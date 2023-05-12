import React from 'react'
import { useLocation } from 'react-router-dom'
import './Users.css'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import UsersList from './UsersList'


const Users = () => {
    
    const location = useLocation()

    return (
        <div className='sidebar'>
            <LeftSideBar />
            <div className="mainuser">
               <h1 style={{fontWeight:"400"}}>Users</h1>
                    <UsersList />
                    
            
            </div>
        </div>
    )
}

export default Users