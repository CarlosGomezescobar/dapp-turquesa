import React from 'react'
import logo from "../assets/logo/logo-benft.png"

const Loading = () => {
  return (
    <div className='loading'>
        {/* <img src={logo} alt="" /> */}
        <div className="loader">
         <div className="circle"></div>
         <div className="circle"></div>
         <div className="circle"></div>
         <div className="circle"></div>
        </div>
    </div>
  )
}

export default Loading
