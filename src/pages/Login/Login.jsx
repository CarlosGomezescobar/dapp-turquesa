import React, { useContext } from 'react'
import logo from "../../assets/logo/logo-benft.png"
import metamaskLogo from "../../assets/icons/metamask.png.png"
import walletConnect from "../../assets/icons/wallet-connect.png"
import trustWallet from "../../assets/icons/trust-wallet.png"
import { WalletContext } from '../../Providers/WallectConnect'

const Login = ({isAllowed,setIsAllowed}) => {

    const { connectToWallet} = useContext(WalletContext);
  return (
    <div className='page-login'>
        <div className='page-login-logo'>
            <img src={logo} alt="Logo BeNFT" />
        </div>
        <div className='page-login-content'>
            <div className='modal-wallets'>
                    <ul>
                        <li>
                            <button onClick={()=>setIsAllowed(!isAllowed)} ><img className='icon-wallets metamask' src={metamaskLogo} alt="logo metamask" />Metamask</button>
                            
                        </li>
                        <li>
                            <button onClick={()=>setIsAllowed(!isAllowed)} ><img className='icon-wallets trust-wallet' src={trustWallet} alt="logo trust wallet" />Trust Wallet</button>
                            
                        </li>
                        <li>
                            <button onClick={()=>setIsAllowed(!isAllowed)}><img className='icon-wallets wallet-connect' src={walletConnect} alt="logo wallet connect" /> Wallet Connect</button>
                            
                        </li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Login

