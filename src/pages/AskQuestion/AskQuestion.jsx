import React, {useState} from 'react'
import './AskQuestion.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {askQuestion} from '../../Actions/question.js'

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({questionTitle, questionBody, questionTags})
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id}, navigate))
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            setQuestionBody(questionBody + "\n")
        }
    }
  return (
      <div>
         
          <div className="ask-qcon">
              <div className="askq">
                  <h1 className="askpq">Ask Public Question</h1>
                  <form action="" onSubmit={handleSubmit}>
                      <div className='fmq'>
                      <div className="askfc">
                          <label htmlFor="askqt">
                              <h4>Title</h4>
                              <p>Be specific and imagine youre asking a question to another person</p>
                              <input type="text" id='askqt' onChange={(e)=> {setQuestionTitle(e.target.value)}} placeholder='e.g. is there any framework is gonna kill reactjs?'/>
                          </label>
                      </div>
                      <div className="askfc">
                          <label htmlFor="askqb">
                              <h4>Body</h4>
                              <p>Include all the infromation someone would need to answer your question</p>
                              <textarea name="" id="askqb" onChange={(e)=> {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                          </label>
                      </div>
                      <div className="askfc">
                          <label htmlFor="askqta">
                              <h4>Tags</h4>
                              <p>Add up to 5 tags to describe what your question is about</p>
                              <input type="text" id='askqta' onChange={(e)=> {setQuestionTags(e.target.value.split(' '))}} placeholder='e.g. is there any framework is gonna kill reactjs?' />
                          </label>
                          </div>
                          </div>
                      <input type="submit" className='sub' value="Review your question" />
                  </form>
              </div>
</div>
       

    </div>
  )
}

export default AskQuestion