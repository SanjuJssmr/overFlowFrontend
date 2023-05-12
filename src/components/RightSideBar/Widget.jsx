import React from 'react'
import { Fa500Px, FaPen } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'
import { BiMessage } from 'react-icons/bi'
const Widget = () => {
  return (
      <div className='widget'>
          <h4>The Overflow Blog</h4>
          <div className='right-sidebar-div-1'>
              <div className='child-1'>
                  <i>{ <FaPen/>}</i>
                  <p>How do we get a tech team to make a big technical change?</p>
              </div>
              <div className='child-2'>
                  <i>{<FaPen />}</i>
                  <p>A conversation with the folks building Google’s AI models and I/O releases</p>
              </div>
          </div>
          <h4>Featured on Meta</h4>
          <div className='right-sidebar-div-1'>
              <div className='child-1'>
                  <i>{<BiMessage style={{ color:"#009dff"}}/>}</i>
                  <p>
                      New blog post from our CEO Prashanth: Community is the future of AI</p>
              </div>
              <div className='child-2'>
                  <i>{<BiMessage style={{ color: "#009dff" }} />}</i>
                  <p>We are updating our Code of Conduct and we would like your feedback</p>
              </div>
              <div className='child-3'>
                  <i>{<FaStackOverflow />}</i>
                  <p>Temporary policy: ChatGPT is banned</p>
              </div>
          </div>
          <h4>Linked</h4>
          <div className='right-sidebar-div-1'>
              <div className='child-1'>
                  <i>39</i>
                  <p>Do better titles lead to a reduction in users – particularly new users – abandoning their questions? Does it increase the rate at which new users come back to the site in the future?</p>
              </div>
              <div className='child-2'>
                  <i>40</i>
                  <p>How many users will accept the titles that are recommended to them?</p>
              </div>
              <div className='child-3'>
                  <i>21</i>
                  <p>Ask page and review page: We’ll move the ‘title’ field to the question review step, and we’ll also offer title suggestions at this step</p>
              </div>
          </div>
    </div>
  )
}

export default Widget