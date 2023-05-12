import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../../Actions/users'

const EditProfileForm = ({ currentUser,setSwitch }) => {
    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [tags, setTags] = useState('')

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (tags.length === 0) {
            dispatch(updateProfile(currentUser?.result?._id, { name, about, tags: currentUser?.result?.tags }))
            console.log(name,about,tags);
        }
        else {
            dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }))
        }
        setSwitch(false)
}

  return (
      <div>
          <h1 className="edit-profile-title">Edit your profile</h1>
          <h2 className="edit-profile-title2">
              Public infromation
          </h2>
          <form onSubmit={handleSubmit} className='edit-profile-form'>
              <label htmlFor="name">
                  <h3>Display name</h3>
                  <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
              </label>
              <label htmlFor="about">
                  <h3>About</h3>
                  <textarea name="about" id="" cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
              </label>
              <label htmlFor="tags">
                  <h3>Watched tags</h3>
                  <p>Add tags separated by one space</p>
                  <input type="text" name="tags" id="tags" onChange={(e) => setTags(e.target.value.split(' '))} />
              </label><br/>
              <input type="submit" value='save profile' className='user-submit-btn' />
              <button className='user-cancel-btn'onClick={()=>setSwitch(false)}>Cancel</button>
          </form>
    </div>
  )
}

export default EditProfileForm