import React from 'react'

const Button = ({ title }) => {
  return (
    <button
      type='button'
    >
      <label> {title}</label>
    </button>
  )
}

export default Button