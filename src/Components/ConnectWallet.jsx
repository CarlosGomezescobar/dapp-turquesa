import React, { useContext, useState } from 'react'
import metamaskLogo from "../assets/icons/metamask.png.png"
import walletConnect from "../assets/icons/wallet-connect.png"
import trustWallet from "../assets/icons/trust-wallet.png"
import {AiOutlineClose} from "react-icons/ai";
import walletImg from "../assets/icons/wallet.png";
import { WalletContext } from '../Providers/WallectConnect';

const ConnectWallet = ({toggleModal, modal}) => {
    const { connectToWallet} = useContext(WalletContext);
  
  return (
    <div className={`modal-header ${!modal ? "hidden" : "visible"}`} >  

        <div className='container-modal'>
            <div className='modal-info'>
                <img className='wallet-img' src={walletImg} alt="imagen de billetera electronica" />
                <div className='modal-info-txt'>
                    <h2>Connect Wallet</h2>
                    <p>Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone.</p>
                </div>
                
            </div>
        
            <AiOutlineClose className='close-icon' onClick={toggleModal} size={"25px"} color={"#121312"}/>
                
        </div>

        
    </div>
  )
}

export default ConnectWallet
