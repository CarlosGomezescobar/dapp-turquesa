import React from 'react'

const Button2 = ({txt,link}) => {

  // href={`${link}`} target='_blank'
  return (
    <button className="btn2">
      <a >
        {txt}
      </a>
    </button>
  )
}

export default Button2
