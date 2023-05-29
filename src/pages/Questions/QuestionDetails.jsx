import React, { useState } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import './Questions.css'
import { useSelector, useDispatch } from 'react-redux'
import DisplayAnswer from './DisplayAnswer'
import { RiArrowDownSFill } from 'react-icons/ri'
import { RiArrowUpSFill } from 'react-icons/ri'
import { postAnswer, deleteQuestion, voteQuestion } from '../../Actions/question'
import moment from 'moment'
import copy from 'react-copy-to-clipboard'

const QuestionDetails = () => {


  const { id } = useParams()
  const questionsList = useSelector((state) => (state.questionsReducer))

  const location = useLocation()
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const [Answer, setAnswer] = useState('')
  const User = useSelector((state) => (state.currentUserReducer))
  const url =  'https://overflowbackend.onrender.com'

  const handlePostAns = (e, answerLength) => {
    e.preventDefault()
    if (User === null) {
      alert('Login or Signup to answer a question')
      Navigate('/Auth')
    } else {
      if (Answer === '') {
        alert('Enter an answer before submitting')
      }
      else {
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
      }
    }

  }
  const handleShare = () => {
   const copy=(url + location.pathname)
    alert('copied url: ' + copy)
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', User.result._id))
  }

  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', User.result._id))
  }

  return (
    <div className='qdp'>
      {
        questionsList?.data === null ? <h1>Loading...</h1> :
          <>
            {
              questionsList?.data.filter(question => question._id === id).map(question => (
                <div key={question._id}>
                  <section className="qdt">
                    <h1>{question.questionTitle}</h1>
                    <div className="qdt2">
                      <div className="qt">
                        <RiArrowUpSFill style={{ fontSize: "2rem" }} onClick={handleUpVote} />
                        <p>{question.upVote.length - question.downVote.length}</p>
                        <RiArrowDownSFill style={{ fontSize: "2rem" }} onClick={handleDownVote} />
                      </div>
                      <div style={{ width: "100%" }}>
                        <p className='qb'>{question.questionBody}</p>
                        <div className="qdtags">
                          {
                            question.questionTags.map((tag) => (
                              <p key={tag}>{tag}</p>
                            ))
                          }
                        </div>
                        <div className="qau">
                          <div>
                            <button onClick={handleShare}>Share</button>
                            {
                              User?.result?._id === question?.userId && (
                                <button onClick={handleDelete}>Delete</button>
                              )
                            }
                          </div>
                          <div>
                            
                            <p>asked on {moment(question.answeredOn).fromNow()}</p>
                            <Link to={`/Users/${question.userId}`} className='ulink' style={{ color: "#fff" }}>
                              <h2 style={{ background: "orange", padding: "8px 15px" }}>{question.userPosted.charAt(0).toUpperCase()}</h2>
                              <div>
                                {question.userPosted}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className='qas'>
                  {question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} Answers</h3>
                      <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                    </section>
                  )}
                  <section className='post-ans'>
                    <h3 >Your Answer</h3>
                    <form action="" onSubmit={(e) => { handlePostAns(e, question.answer.length) }}>
                      <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                      <input type="submit" value="Post Your Answer" className='ansbtn' />
                    </form>
                    <p>
                      Browse other question tagged{
                        question.questionTags.map((tag) => (
                          <Link to='/Tags' key={tag} className='ans-tag' >{tag}</Link>
                        ))
                      } or
                      <Link to='/AskQuestions' style={{ textDecoration: "none", color: "#009dff" }}>Ask tour own question</Link>
                    </p>
                    </section>
                  </div>
                </div>
              ))
            }
          </>
      }
    </div>
  )
}

export default QuestionDetails
