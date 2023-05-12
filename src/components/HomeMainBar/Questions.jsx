import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


const Questions = ({ question }) => {
    return (
        <div className=' conques'>
            <div className='display-votes'>
                <p>{question.upVote.length- question.downVote.length} Votes</p>
            </div>
            <div className='display-votes'>
                <p>{question.noOfAnswers} Answers</p>
            </div>
            <div className='display-qdetails'>
                <Link to={`/Questions/${question._id}`} className='qtitle'>{question.questionTitle}</Link>
                <div className='qtimedtails'>
                    <div className='tags'>
                        {
                            question.questionTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <div className='time'>
                        <p>asked on {moment(question.askedOn).fromNow()} by {question.userPosted}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions