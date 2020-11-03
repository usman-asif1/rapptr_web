import React from 'react'

import { emailImg, passwordImg, usernameImg } from 'assets'
import './style.scss'

const CustomInput = ({ label, type, handleChange, name, value }) => {
  const inputType = () => {
    switch (type) {
      case 'email':
        return <img src={emailImg} className="tag-img" alt="email-img" />
      case 'password':
        return <img src={passwordImg} className="tag-img" alt="password-img" />
      default:
        return <img src={usernameImg} className="tag-img" alt="username-img" />
    }
  }

  return (
    <div>
      <div className="tag-main">
        {inputType()}

        <div className="tag-inner">
          <input
            name={name}
            type={type}
            placeholder={label}
            className="tag-input"
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>
    </div>
  )
}

export default CustomInput
