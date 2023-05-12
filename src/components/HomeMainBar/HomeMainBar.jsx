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


  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a Framework",
  //   questionBody: "It meant to be",
  //   questionTags: ['java', 'springboot', 'laravel', 'java', 'springboot', 'laravel', 'java', 'springboot', 'laravel', 'java', 'springboot', 'laravel', 'java', 'springboot', 'laravel', 'java', 'springboot', 'laravel', 'java', 'springboot', 'laravel'],
  //   userPosted: "Rahul",
  //   userId:1,
  //   askedOn: "Jan 2",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "mohan",
  //     answeredOn: "jan 3",
  //     userId:"3"
  //   }]
  // },
  //   {
  //     _id: 2,
  //     upVotes: 3,
  //     downVotes:2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a React",
  //     questionBody: "It meant to be",
  //     questionTags: ['Nodejs', 'AntDesign', 'Components','reduxToolKit','mongoose'],
  //     userPosted: "Ravi",
  //     userId:2,
  //     askedOn: "Jan 3",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "arun",
  //       answeredOn: "jan 4",
  //       userId: "4"
  //     }]
  //   }]

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
      <div >{
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

