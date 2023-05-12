import React from 'react'

const WidgeTags = () => {
  const tags = ['c', 'c++', 'react','thunk','javascript', 'mongoose', 'angular','node.js','web3','python','blockchain']

  return (
    <div className='tags'>
      <h4>Watched Tags</h4>
      <div className='tags-div'>
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
      ))}
        </div>
    </div>
  )
}

export default WidgeTags