import React, { useRef } from 'react'
import logo from "../assets/logo/logo-benft.png"
import {AiOutlineClose} from "react-icons/ai";
import MenuNav from './MenuNav';
import Comunity from './Comunity';

const MenuMobile = ({closeMenu}) => {

    const refActive = useRef()
    const addActive = () =>{
        refActive.current.classList.add("active")
    }
    const removeActive = () =>{
        refActive.current.classList.remove("active")
    }

  return (
    <div className='menu-mobile'>
        <div className='logo'>
            <img className='logo-menu' src={logo} alt="logo-benft" />
            <AiOutlineClose onClick={closeMenu} color='#2c98d4' size={"30px"}/>
        </div>
        
        <MenuNav removeAct={closeMenu} addAct={closeMenu} refActive={refActive}/>

        <Comunity />

    </div>
  )
}

export default MenuMobile
