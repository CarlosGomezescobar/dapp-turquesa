import React, { useEffect, useRef } from 'react'
import {AiOutlineArrowUp,AiOutlineArrowDown} from "react-icons/ai"
import slider1 from "../assets/slider/what-benft.jpg"
import slider2 from "../assets/slider/web-defi.jpg"
import slider3 from "../assets/slider/ai-earn-engine.jpg"

const Slider = () => {

    let activeSlideIndex = 0
    const slideRight = useRef()
    const slideLeft = useRef()
    const sliderContainer = useRef()
    
    useEffect(()=>{
        slideRight.current.style.top = `-${(3 - 1) * sliderContainer.current.clientHeight}px`
    },[])

    const slider = (direction) => {
        const slidesLength = slideRight.current.childElementCount
        const sliderHeight = sliderContainer.current.clientHeight
        
        if(direction === 'up') {
            activeSlideIndex++
            if(activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0
            }
        } else if(direction === 'down') {
            activeSlideIndex--
            if(activeSlideIndex < 0) {
                activeSlideIndex = slidesLength -1
            }
        }
    
        slideRight.current.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
        slideLeft.current.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    }

  return (
    <div ref={sliderContainer} className="slider-container" data-aos="fade-right" data-aos-duration="1000" >
        <div ref={slideLeft} className="left-slide">
            <div >
            <h1>What is BeNFT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quaerat, quas laboriosam vitae.
            </p>
            </div>
            <div >
            <h1>Pool 1</h1>
            <p>Weekly 4</p>
            </div>
            <div >
            <h1>Pool 2</h1>
            <p>Monthly</p>
            </div>

        </div>
        <div ref={slideRight} className="right-slide">
            <div className='right-slide-div'>
                <img src={slider3} alt="" />
            </div>
            <div className='right-slide-div'>
                <img src={slider2} alt="" />
            </div>
            <div className='right-slide-div'>
                <img src={slider1} alt="" />
            </div>

        </div>
        <div className=" action-buttons">
            <button onClick={()=> slider("up")}  className=" button-slider down-button ">
                <AiOutlineArrowDown size={"18px"} color='#2c98d4'/>
            </button>
            <button onClick={()=> slider("down")} className=" button-slider up-button ">
                <AiOutlineArrowUp size={"18px"} color='#2c98d4'/>
            </button>
        </div>
    </div>

  )
}

export default Slider
