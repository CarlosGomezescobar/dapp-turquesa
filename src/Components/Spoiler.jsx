import React, { useEffect, useRef, useState } from 'react'
import spoiler from "../assets/spoiler.jpg"

const Spoiler = () => {

    const ref1 = useRef()
    const ref2 = useRef()
    const [animationState,setAnimationState] = useState("")
    const [spoilerAnimation,setSpoiler] = useState("")
    const animation = ()=>{

        setTimeout(()=>{
            window.scrollTo(0,0)
        },1000)

        setTimeout(()=>{
            
            setAnimationState("pseudo-spoiler")
            
        },1500)

        setTimeout(()=>{
            setAnimationState("")
            ref2.current.style.display = "flex"
        },2500)

        setTimeout(()=>{
            setAnimationState("pseudo-spoiler")
        },5000)

        setTimeout(()=>{
            setAnimationState("")
            setSpoiler("")
            ref2.current.style.display = "none"
        },6000)
    }

    useEffect(()=>{
        animation()
    },[])
  return (
    <div ref={ref1} className={`div-spoiler  ${animationState}`}>
        {/* <div className='bg-initial'></div> */}
        <div ref={ref2} className={`spoiler  ${animationState}`}></div>
        {/* <img src={spoiler} alt="" />       */}
    </div>
  )
}

export default Spoiler
