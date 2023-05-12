import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
      <div className='sidebar'>
          <LeftSideBar />
          <div className='main'>
              <QuestionDetails/>
              <RightSideBar />
          </div>
      </div>
  )
}

export default DisplayQuestion