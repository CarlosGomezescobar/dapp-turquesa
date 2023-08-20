import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoMin from "../assets/logo/logo-min.png"
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import {FiHome } from 'react-icons/fi';
import { MdHowToVote, MdCollections } from 'react-icons/md';
import {GiReceiveMoney} from "react-icons/gi";
import {IoIosArrowDown} from "react-icons/io";
import {BsArrowRightShort} from "react-icons/bs"
import data from "../Data/contracts.json"

const MenuNav = ({removeAct, addAct, refActive}) => {

    const [isOpen,setIsOpen] = useState({
        earn: false,
        weekly: false,
        montly: false,
        private: false,
        vispx: false,
        claim: false
    })


    const toggleEarn = (id)=>{
        const nEarn = {...isOpen}

        if(id=="earn"){
            nEarn.earn = !nEarn.earn
            setIsOpen(nEarn)
        }else if(id=="weekly"){
            nEarn.weekly = !nEarn.weekly
            setIsOpen(nEarn)
        }else if(id=="montly"){
            nEarn.montly = !nEarn.montly
            setIsOpen(nEarn)
        }else if(id=="private"){
            nEarn.private = !nEarn.private
            setIsOpen(nEarn)
        }else if(id=="vispx"){
            nEarn.vispx = !nEarn.vispx
            setIsOpen(nEarn)
        }else if(id=="claim"){
            nEarn.claim = !nEarn.claim
        }
    }

  return (
    <div className='menu-nav'>
            <NavLink onClick={removeAct} className='menu-nav-options' to="/" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"><FiHome size={"20px"} color="#fa5777"/> Home 🖥</NavLink>
            <NavLink onClick={removeAct} className='menu-nav-options' to="/pool" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"><GiReceiveMoney size={"20px"} color="#fa5777"/> Pool🔄</NavLink>
        
            
            <NavLink onClick={removeAct} className='menu-nav-options' to="/collection" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400"><MdCollections size={"20px"} color="#fa5777"/> Collection</NavLink>
        </div>
  )
}

export default MenuNav
