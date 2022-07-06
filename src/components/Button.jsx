import React from 'react'

const Button = ({size, color, bgColor,borderRadius,text }) => {
  return (
    <button 
      type='button'
      style={{backgroundColor:bgColor, color:color, borderRadius }}
      className = {`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button