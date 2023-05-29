import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './HomeMain.css'
import { useSelector } from 'react-redux'
import QuestionList from './QuestionList'

const HomeMainBar = () => {

  const user = 1
  const location = useLocation()
  const navigate = useNavigate()

  const questionsList = useSelector((state) => (state.questionsReducer))

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate("/Auth")
    }
    else {
      navigate("/AskQuestions")
    }
  }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-question'>Ask Question</button>
      </div>
      <div className='load' >{
        questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.data.length} Questions</p>

            <QuestionList questionsList={questionsList.data} />



          </>
      }</div>
    </div>
  )
}

export default HomeMainBar

