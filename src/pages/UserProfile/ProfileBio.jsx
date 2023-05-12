import React from 'react'

const ProfileBio = ({currentProfile}) => {
    return (
        <div>
            <div className='tags'>{
                currentProfile?.tags !==0 ? (
                    <>
                        <h3>Tags watched</h3>
                        {
                            currentProfile?.tags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))}
                    </>
                ) : (
                    <h4>0 Tags watched</h4>
                )
            }

            </div>
            <div className='tags'>
                {
                    currentProfile?.about ? (
                        <>
                        <h3>About</h3>
                            <h5 style={{fontWeight:"400"}}>{currentProfile?.about}</h5>
                        </>
                    ) : (
                            <p>No Bio Found</p>
                )
                }
            </div>
      </div>
      
  )
}

export default ProfileBio