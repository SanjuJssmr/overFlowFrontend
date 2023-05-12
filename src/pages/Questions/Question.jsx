import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'

const Questions = () => {
    return (
        <div className='sidebar'>
            <LeftSideBar />
            <div className='main'>
                <HomeMainBar />
                <RightSideBar />
            </div>
        </div>
    )
}

export default Questions