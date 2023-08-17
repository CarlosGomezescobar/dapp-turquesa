import React from 'react'

const Button = ({funct}) => {
  return (
    <>
        <button className='button' onClick={funct} data-aos="fade-in"
        data-aos-duration="800" >
        Connect Wallet
        <div id="clip">
            <div id="leftTop" className="corner" />
            <div id="rightBottom" className="corner" />
            <div id="rightTop" className="corner" />
            <div id="leftBottom" className="corner" />
        </div>
        <span id="rightArrow" className="arrow" />
        <span id="leftArrow" className="arrow" />
        </button>
    </>
  )
}

export default Button
