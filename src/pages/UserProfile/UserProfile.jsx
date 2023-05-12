import React, { useState } from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaBirthdayCake, FaPen } from 'react-icons/fa'
import moment from 'moment'
import './User.css'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
const UserProfile = () => {
const {id}=useParams()
    const users = useSelector((state) => (state.usersReducer))
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => (state.currentUserReducer))

  const [Switch, setSwitch] = useState(false)

  return (
      <div className='sidebar'>
          <LeftSideBar   />
          
          <div className='mainusr'>
              <section>
                  <div className="user-details-container">
                      <div className="user-details">
                          <Avatar backgroundColor='purple' color='#fff' borderRadius='8px' fontSize='50px' px='40px' py='30px'>
                              {currentProfile?.name.charAt(0).toUpperCase()}
                          </Avatar>
                          <div className="user-name">
                              <h1>{currentProfile?.name}</h1>
                              <p style={{fontSize:"10px"}}>{<FaBirthdayCake style={{marginRight:"5px",marginTop:"2px"}}/>}Joined { moment (currentProfile?.joinedOn).fromNow()}</p>
                          </div>
                      </div>
                      {
                          currentUser?.result._id === id && (
                              <button onClick={()=>setSwitch(true)} className='edit-profile-btn'>
                                  <FaPen/> Edit Profile
                              </button>
                          )
                      }
                  </div>
                  <>
                      {Switch ?
                          (<EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />)
                          :
                          (<ProfileBio currentProfile={currentProfile} />)}</>
              </section>
        </div>
    </div>
  )
}

export default UserProfile