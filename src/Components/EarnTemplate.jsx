import React, { useEffect, useRef, useState } from 'react'
import {FaUserAlt} from "react-icons/fa"
import Button2 from './Button2'
import Table from './Table'
import usdt from "../assets/icons/usdt.png"
import {ImQuestion} from "react-icons/im"
import {BsQuestionLg, BsQuestionSquare} from "react-icons/bs"
const EarnTemplate = (props) => {
    const {address,namePool,yieldField,strategy,risk,pool,min,max,token,progress} =props;
    const [deposit,setDeposit] = useState()
    const amountApproved = 500;
    const money= "500,000.00 USDT";
    const bar = useRef()
    const poolSize = parseFloat(pool)
    const progressParse = parseFloat(progress)
    const percent = progressParse * 100 / poolSize + "%"
    const balance = 500
    const stake = 3000
    const pendingEarn = 3000*27/100
    const totalPayout = stake + pendingEarn

    //cambiar el width de la barra segun el %
    useEffect(()=>{
        bar.current.style.width= `${percent}`
    },[progress])

    //CONTADOR
    const [seconds,setSeconds] = useState()
    const [minutes,setMinutes] = useState()
    const [hours,setHours] = useState()
    const [days,setDays] = useState()
    const DATE_TARGET = new Date('4/20/2023 0:01 AM');
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
   
    const counter = ()=>{
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        setSeconds(REMAINING_SECONDS)
        setMinutes(REMAINING_MINUTES)
        setHours(REMAINING_HOURS)
        setDays(REMAINING_DAYS)
    }

    setInterval(counter, MILLISECONDS_OF_A_SECOND);

  return (
    <div className='earn-strategies'>
        <div className='section-top'>
            <div className='strategies'
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000">
                <div className='strategies-txt'>
                    <p>{namePool}</p>
                    <h3>Weekly yield: {yieldField}</h3>
                </div>
                <div className='strategies-txt-details'>
                    <h4>Strategy type: <span>{strategy}</span></h4>
                    <div className='strategies-txt-risk'>
                        <h4>Risk: <span>{risk}</span> 
                        </h4> 
                        <div className='question-icon'>
                            <BsQuestionSquare size={"20px"} color='#245a78'/>
                            <p className='info-risk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        
                    </div>
                    <h4 className='pool-size'>Pool size: <span>{pool} USDT</span></h4>
                    <h4>Min entry: <span>{min} USDT</span></h4>
                    <h4>Max entry: <span>{max} USDT</span></h4>
                    <h4>Token: <span>{token}</span></h4>
                    <h4 className='pool-address'>Address: <span><a href={`https://bscscan.com/address/${address}`} target='_blank'>{address}</a></span></h4>
                    <h4>SC Balance: <span>{money}</span></h4>
                </div>
            </div>
            <div className='progress-section'
             data-aos="fade-left"
             data-aos-delay="100"
             data-aos-duration="1000">
                <h3><FaUserAlt size={"20px"}/> Progress in Pool</h3>
                <div className='progress-section-details'>
                    <div className='progress-section-details-bar'>
                        <div className='progress-bar'>
                            <div ref={bar} className='bar'>
                                
                            </div>
                            <p className='min' >0</p>
                            <p className='bar-detail'>{progress}</p>
                            <p className='max' >{poolSize}</p>
                        </div>
                        <div className='approve'>
                            <Button2 txt="Approve"/>
                            <p className='amount-approved'>Amount approved for use: <span>{amountApproved} USDT</span></p>
                        </div>

                        <div className='details-staked'>

                            <div className='details-staked-input'>
                                <div className='input-button'>
                                    <div className='div-input-deposit'>
                                        <input className='input-deposit' placeholder='0.0' type="number" onChange={(e)=>{setDeposit(e.target.value)}} />
                                        <div className='input-usdt'>
                                            <img className='input-icon' src={usdt} alt="Logo de USDT" />
                                            <p>USDT</p>
                                        </div>
                                        <div className='balance-input'>
                                            <p>Balance: <span>{balance}</span></p>
                                            <button className='max-input'>MAX</button>
                                        </div>
                                    </div>
                                    <button className='btn2'>Deposit</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='progress-section-details-staked'>
                        <div className='table-staked'>
                            <div className='table-row row1'>
                                <div><h3>Your stake:</h3></div>
                                <p className='table-number'>{stake} USDT</p>
                            </div>
                            <div className='table-row row1'>
                                <div><h3>Pending Earn:</h3></div>
                                <p className='table-number'>{pendingEarn} USDT</p>
                            </div>
                            <div className='table-row '>
                                <div><h3>Total payout:</h3></div>
                                <p className='table-number'>{totalPayout} USDT</p>
                            </div>
                        </div>
                        <button className='btn2 btn-claim'>
                            <p className='text-button-remaining'>
                                <span id="days">{days}</span> days / <span id="hours">{hours}</span> hours / <span id="minutes">{minutes}</span> minutes / <span id="seconds">{seconds}</span> seconds to Claim
                            </p>
                        </button>
                    </div>
                </div>

                

            </div>

            
        </div>
        <Table />
    </div>
  )
}

export default EarnTemplate
