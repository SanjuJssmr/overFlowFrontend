import React from 'react'
import './RightSideBar.css'
import Widget from './Widget'
import WidgeTags from './WidgeTags'
const RightSideBar = () => {
  return (
    <div className='right-sidebar'>
      <Widget />
      <WidgeTags/>
    </div>
  )
}

export default RightSideBar