import React from 'react'
import { FaYoutube, FaTelegramPlane, FaTwitter, FaLinkedin, FaMediumM, FaDiscord  } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Comunity = () => {
  return (
    <div className='comunity'>
           
            <ul className='comunity-grid'>
                <li><a href="/" target="_blank"><FaDiscord size={"20px"}/> </a></li>
                <li><a href="/" target="_blank"><FaYoutube size={"20px"}/></a></li>
                <li><a href="/" target="_blank"> <AiFillInstagram  size={"20px"}/></a></li>
                <li><a href="/" target="_blank"> <FaTelegramPlane  size={"20px"}/></a></li>
                <li><a href="/" target="_blank"> <FaLinkedin  size={"20px"} /></a></li>
                <li><a href="/" target="_blank"> <FaTwitter size={"20px"}  /></a></li>
               {/** <li><a href="https://medium.com/@benft.solutions" target="_blank"> <FaMediumM  size={"20px"} /></a></li> */}
            </ul>
    </div>
  )
}

export default Comunity
