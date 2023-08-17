import { ethers } from 'ethers'
import React, { useEffect, useState, createContext } from 'react'
import Swal from 'sweetalert2'
import Web3Modal from 'web3modal'

const web3modalStorageKey = 'WEB3_CONNECT_CACHED_PROVIDER'

export const WalletContext = createContext({})

const WallectConnect = ({ children }) => {
  const [address, setAddress] = useState(undefined)
  const [balance, setBalance] = useState(undefined)
  const [Provider, setProvider] = useState(
    address
      ? ''
      : new ethers.providers.JsonRpcProvider(
          'https://bsc-dataseed1.binance.org/',
        ),
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const web3Modal =
    typeof window !== 'undefined' && new Web3Modal({ cacheProvider: true })
  // const chainID = 97;
  const chainID = 5
  /* This effect will fetch wallet address if user has already connected his/her wallet */
  useEffect(() => {
    async function checkConnection() {
      try {
        if (window && window.ethereum) {
          // Check if web3modal wallet connection is available on storage
          if (localStorage.getItem(web3modalStorageKey)) {
            await connectToWallet()
          }
        } else {
          console.log('window or window.ethereum is not available')
        }
      } catch (error) {
        console.log(error, 'Catch error Account is not connected')
      }
    }
    checkConnection()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setWalletAddress = async (provider) => {
    try {
      const signer = provider.getSigner()
      if (signer) {
        const web3Address = await signer.getAddress()
        setAddress(web3Address)
        getBalance(provider, web3Address)
      }
    } catch (error) {
      console.log(
        'Account not connected; logged from setWalletAddress function',
      )
    }
  }

  const getBalance = async (provider, walletAddress) => {
    const walletBalance = await provider.getBalance(walletAddress)
    const balanceInEth = ethers.utils.formatEther(walletBalance)
    setBalance(balanceInEth)
  }

  const disconnectWallet = () => {
    setAddress(undefined)
    web3Modal && web3Modal.clearCachedProvider()
  }

  const checkIfExtensionIsAvailable = () => {
    if (
      (window && window.web3 === undefined) ||
      (window && window.ethereum === undefined)
    ) {
      setError(true)
      web3Modal && web3Modal.toggleModal()
    }
  }

  const connectToWallet = async () => {
    try {
      setLoading(true)
      checkIfExtensionIsAvailable()
      const connection = web3Modal && (await web3Modal.connect())
      const provider = new ethers.providers.Web3Provider(connection)
      //chainId
      if (connection.networkVersion != '56') {
        Swal.fire({
          title: 'error',
          icon: 'error',
          text: 'wrong network, please swicht to BSC',
        })
        let RequestSend = {
          id: 1337,
          jsonrpc: '2.0',
          method: 'wallet_addEthereumChain',
          // params: [
          //   {
          //     chainId: '0x61',
          //     chainName: 'Binance Smart Chain TestNet',
          //     nativeCurrency: {
          //       name: 'Binance Coin',
          //       symbol: 'TBNB', // 2-6 characters long
          //       decimals: 18,
          //     },
          //     rpcUrls: ['https://data-seed-prebsc-1-s3.binance.org:8545/'],
          //     blockExplorerUrls: ['https://testnet.bscscan.com/'],
          //   },
          // ],
            params: [
             {
               chainId: '0x38',
               chainName: 'Binance Smart Chain Mainnet',
               nativeCurrency: {
                 name: 'Binance Coin',
                 symbol: 'bnb', // 2-6 characters long
                 decimals: 18,
               },
           rpcUrls: ['https://bsc-dataseed1.binance.org/'],
               blockExplorerUrls: ['https://bscscan.com/'],
           },
           ],
        }
        connection.request(RequestSend)
        return
      }
      await subscribeProvider(connection)
      setProvider(provider)
      setWalletAddress(provider)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(
        error,
        'got this error on connectToWallet catch block while connecting the wallet',
      )
    }
  }

  const subscribeProvider = async (connection) => {
    connection.on('close', () => {
      disconnectWallet()
    })
    connection.on('accountsChanged', async (accounts) => {
      if (accounts?.length) {
        setAddress(accounts[0])
        const provider = new ethers.providers.Web3Provider(connection)
        getBalance(provider, accounts[0])
      } else {
        disconnectWallet()
      }
    })
  }

  return (
    <WalletContext.Provider
      value={{
        address,
        balance,
        loading,
        error,
        Provider,
        connectToWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export default WallectConnect
