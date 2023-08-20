import React, { useRef } from 'react';
import MenuNav from './MenuNav';
import Comunity from './Comunity';

const Menu = () => {
    const refActive = useRef()
    const addActive = () =>{
        refActive.current.classList.add("active")
    }
    const removeActive = () =>{
        refActive.current.classList.remove("active")
    }

    
  return (
    <div className='menu'>
        <div className='logo'>
          {/**  <img className='logo-menu' src={logo} alt="" />  */} 
        </div>
        <MenuNav removeAct={removeActive} addAct={addActive} refActive={refActive}/>

        <Comunity />
        
    </div>
  )
}

export default Menu
