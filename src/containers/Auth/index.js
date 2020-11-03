import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import CustomInput from 'components/CustomInput'
import { gpcLogo } from 'assets'
import { loginSubmit, signUpSubmit } from 'api'
import './style.scss'

const Auth = ({ history }) => {
  const [login, setLogin] = useState(history.location.pathname === '/signup' ? false : true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleLogin = () => {
    history.push('/login')
    setLogin(true)
    emptyForm()
  }

  const handleSignup = () => {
    history.push('/signup')
    setLogin(false)
    emptyForm()
  }

  const handleAuthSubmit = () => {
    let bodyFormData = new FormData()

    bodyFormData.append('email', email)
    bodyFormData.append('password', password)

    if (username) {
      bodyFormData.append('username', username)
    }

    login ? loginSubmit(bodyFormData, emptyForm) : signUpSubmit(bodyFormData, emptyForm)
  }

  const emptyForm = () => {
    setEmail('')
    setPassword('')
    setUsername('')
  }

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value)
    } else if (target.name === 'password') {
      setPassword(target.value)
    } else {
      setUsername(target.value)
    }
  }

  return (
    <div className="container-home">
      <img src={gpcLogo} className="logo-img" alt="logo" />

      <div className="home-outer">
        <div className="home-inner">
          <div>
            <div className="login-buttons">
              <h3 className={`login-signup ${!login ? 'active-link' : ''}`} onClick={handleSignup}>
                Signup
              </h3>
              <h3 className={`login-link ${login ? 'active-link' : ''}`} onClick={handleLogin}>
                Login
              </h3>
            </div>

            <div className="input-tags">
              {!login && (
                <CustomInput
                  name="username"
                  label="Username"
                  type="text"
                  handleChange={handleChange}
                  value={username}
                  styles="tag-input"
                />
              )}
              <CustomInput
                name="email"
                label="Email"
                type="email"
                handleChange={handleChange}
                value={email}
                styles="tag-input"
              />
              <CustomInput
                name="password"
                label="Password"
                type="password"
                handleChange={handleChange}
                value={password}
                styles="tag-input"
              />
            </div>
            <div>
              <button className="login-input" onClick={handleAuthSubmit}>
                {' '}
                {login ? 'login' : 'sign up'}{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Auth)
