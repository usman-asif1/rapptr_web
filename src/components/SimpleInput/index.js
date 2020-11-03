import React from 'react'

import './style.scss'

const SimpleInput = ({ label, type, handleChange, name, value, styles }) => (
  <input
    className={styles}
    name={name}
    type={type}
    placeholder={label}
    onChange={handleChange}
    value={value}
  />
)

export default SimpleInput
