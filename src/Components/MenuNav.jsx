import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoMin from "../assets/logo/logo-min.png"
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdHowToVote, MdCollections } from 'react-icons/md';
import {AiOutlineArrowDown} from "react-icons/ai";
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
            <NavLink onClick={removeAct} className='menu-nav-options' to="/" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"><HiHome size={"20px"} color="#9ed0ed"/> Dashboard</NavLink>
            <NavLink onClick={removeAct} className='menu-nav-options' to="/vote" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"><MdHowToVote size={"20px"} color="#9ed0ed"/> Vote</NavLink>
            
            <div>
                        <a ref={refActive} onClick={()=>toggleEarn("earn")} href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle menu-nav-dropdown" data-aos="fade-right" data-aos-delay="300">
                            <span className="ms-1 d-sm-inline"><FaMoneyBillWaveAlt className='me-1' size={"20px"} color="#9ed0ed"/> Earn Strategies <IoIosArrowDown className={`${!isOpen.earn ? "arrow-close" : "arrow-open"}`}/>
                            
                            </span></a>
                        <ul className="collapse nav flex-column ms-1 menu-list w-100 pruebita" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("claim")} href="#submenu3" data-bs-toggle="collapse" className="px-0"> Claim Only <IoIosArrowDown className={`${!isOpen.claim ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3 pb-2" id="submenu3" data-bs-parent="#menu">
                                    {data.map((contract)=>(
                                        contract.parent == "claim" && 
                                        <li className='w-100'>
                                            <NavLink onClick={addAct} to={`/earn-strategies/${contract.address}`}>{contract.namePool}</NavLink>
                                        </li>
                                    ))}
                                   
                                </ul>
                            </li>
                            <li className='w-100 menu-list-group'>
                                 <NavLink onClick={addAct} to="/earn-strategies/earn-benftpass"> Earn BeNFT Pass</NavLink>
                            </li>
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("weekly")} href="#submenu4" data-bs-toggle="collapse" className="px-0"> Weekly <IoIosArrowDown className={`${!isOpen.weekly ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3 " id="submenu4" data-bs-parent="#menu">
                                    {data.map((contract)=>(
                                        contract.parent == "weekly" && 
                                        <li className='w-100'>
                                            <NavLink onClick={addAct} to={`/earn-strategies/${contract.address}`}>{contract.namePool}</NavLink>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("montly")} href="#submenu5" data-bs-toggle="collapse" className="px-0"> Montly <IoIosArrowDown className={`${!isOpen.montly ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu5" data-bs-parent="#menu">
                                    {data.map((contract)=>(
                                        contract.parent == "montly" && 
                                        <li className='w-100'>
                                            <NavLink onClick={addAct} to={`/earn-strategies/${contract.address}`}>{contract.namePool}</NavLink>
                                        </li>
                                    ))}
                                    {/* <NavLink onClick={addAct} to="/earn-strategies/monthly1">Monthly 1</NavLink> */}
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group">
                                <a onClick={()=>toggleEarn("private")} href="#submenu6" data-bs-toggle="collapse" className="px-0"> Private <IoIosArrowDown className={`${!isOpen.private ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu6" data-bs-parent="#menu">
                                    {data.map((contract)=>(
                                        contract.parent == "private" && 
                                        <li className='w-100'>
                                            <NavLink onClick={addAct} to={`/earn-strategies/${contract.address}`}>{contract.namePool}</NavLink>
                                        </li>
                                    ))}
                            
                                </ul>
                            </li>
                            <li className="w-100 menu-list-group" >
                                <a onClick={()=>toggleEarn("vispx")} href="#submenu7" data-bs-toggle="collapse" className="px-0"> Vispx <IoIosArrowDown className={`${!isOpen.vispx ? "arrow-close" : "arrow-open"}`}/></a>
                                <ul className="collapse nav flex-column ms-3" id="submenu7" data-bs-parent="#menu">
                                    {data.map((contract)=>(
                                        contract.parent == "vispx" && 
                                        <li className='w-100'>
                                            <NavLink onClick={addAct} to={`/earn-strategies/${contract.address}`}>{contract.namePool}</NavLink>
                                        </li>
                                    ))}

                
                                </ul>
                            </li>
                        </ul>
            </div>
            
            
            <NavLink onClick={removeAct} className='menu-nav-options' to="/collection" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400"><MdCollections size={"20px"} color="#9ed0ed"/> Collection</NavLink>
        </div>
  )
}

export default MenuNav
