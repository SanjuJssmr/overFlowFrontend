import React, { useState } from 'react'
import { FaStackOverflow } from 'react-icons/fa'
import AboutAuth from './AboutAuth'
import './Auth.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, signup } from '../../Actions/auth'

const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignUp(!isSignUp)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and Password")
    }

    if (isSignUp) {
      if (!name) {
        alert("Enter name to continue")
      }
      dispatch(signup({ name, email, password }, navigate))
    }
    else {
      dispatch(login({ email, password }, navigate))
    }

  }

  return (
    <div>
      <section className='authsec'>
        <div>
          {isSignUp && <AboutAuth />}
        </div>
        <div className='container'>
          {!isSignUp && <FaStackOverflow className='logo2' />}
          <form className='frm' onSubmit={handleSubmit}>
            {isSignUp && (
              <label htmlFor='name'>
                <h3>Display Name</h3>
                <input type="text" id='name' name='name' onChange={(e) => { setName(e.target.value) }} />
              </label>
            )

            }
            <label htmlFor='email'>
              <h3>Email</h3>
              <input type="email" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} />
            </label>
            <label htmlFor='password'>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Password</h3>
                {!isSignUp && <h4 className='frgt'>Forgot password ?</h4>}
              </div>

              <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
              {isSignUp && <p>Password must contain at least eight <br />characters, including at least 1 letter and <br />1 symbol.</p>}

            </label>
            {
              isSignUp && (
                <label htmlFor='check' className='chkbx'>
                  <input type="checkbox" name="" id="check" />
                  <p>Remember_Me!</p>
                </label>
              )
            }
            <button type='submit' className='bigbtn'>{isSignUp ? 'Sign UP' : 'Log in '}</button>
            {
              isSignUp && (
                <p style={{ color: "#666767" }}>By clicking on sign up , you agree to our <br /> <span style={{ color: "#007ac5" }}>terms of service</span> and
                  <span style={{ color: "#007ac5" }}> privacy and cookie</span> policy</p>
              )
            }
          </form>
          <p className='bottom'>
            {isSignUp ? 'already have an account ?' : "Don't have an account"}
            <button onClick={handleSwitch}>{isSignUp ? "Log in" : 'Sign Up'}</button>
          </p>
        </div>
      </section>

    </div>
  )
}

export default Auth
