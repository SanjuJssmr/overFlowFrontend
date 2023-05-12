import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import {deleteAnswer} from '../../Actions/question'

const DisplayAnswer = ({ question, handleShare }) => {
    const User = useSelector((state) => state.currentUserReducer)
    const { id } = useParams()
    const dispatch = useDispatch()

    

    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
    }
    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className="dans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="qau">
                            <div>
                                <button onClick={handleShare}>Share</button>
                                {
                                    User?.result?._id === ans?.userId && (
                                        <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                                    )
                                }
                            </div>
                            <div>
                                <p>answer on {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/Users/${ans.userId}`} className='ulink' style={{ color: "#fff" }}>
                                    <h2 style={{ background: "green", padding: "8px 15px" }}>{ans.userAnswered.charAt(0).toUpperCase()}</h2>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer