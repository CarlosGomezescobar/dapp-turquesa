import React, { useContext, useRef, useState } from 'react'
import Button from './Button'
import logoMin from "../assets/logo/logo-min.png"
import MenuMobile from './MenuMobile'
import {IoIosArrowDown} from "react-icons/io";
import {FiLogOut} from "react-icons/fi"
import { WalletContext } from '../Providers/WallectConnect';


const Header = ({toggleModal}) => {
  const { address, disconnectWallet, balance } = useContext(WalletContext);

    function disableScroll() {
        document.body.classList.add("stop-scrolling");
      }
      
      function enableScroll() {
        document.body.classList.remove("stop-scrolling");
      }

    const [walletModal,setWalletModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [animation, setAnimation] = useState("")
    const menuRef = useRef("")
    const setMenu = () =>{
        if(!isOpen){
            setIsOpen(!isOpen)
            disableScroll()
            setAnimation("aparecer")
            menuRef.current.style.display="flex"
            
        }
        else{
            setIsOpen(!isOpen)
            enableScroll()
            setAnimation("desaparecer")
            setTimeout(()=>{menuRef.current.style.display="none"},200)
        }
      }

  return (
    <div className='header'>
        <div className='header-left'>
            <div className={`hambur ${isOpen ? "active2" : ""}`} onClick={setMenu}>
                    <div className="hambur-1 menu-hambur"></div>
                    <div className="hambur-2 menu-hambur"></div>
                    <div className="hambur-3 menu-hambur"></div>
            </div>
        </div>

       {address && <div className='wallet-connected'>
          <div onClick={()=>setWalletModal(!walletModal)} className='wallet'>
            <p>{address.substr(0,8)}...{address.substr(-8,8)}</p>
            <IoIosArrowDown />
          </div>
          <div className={`wallet-connected-data ${walletModal ? "visible" : "hidden"}`}>
            <p>BNB: <span className='span-balance'>{balance}</span></p>
            <p onClick={()=>disconnectWallet()} >Disconnect <span><FiLogOut/></span></p>
          </div>
        </div>}
        
        {/* {!address &&<Button funct={toggleModal} />} */}

        <div className={`mobile-menu ${animation}`} ref={menuRef} >
            <MenuMobile closeMenu={setMenu} />
        </div>
       
        


    </div>
  )
}

export default Header
