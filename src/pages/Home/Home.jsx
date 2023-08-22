import React from 'react'
import Slider from '../../Components/Slider'
import {TbBrandAirbnb} from "react-icons/tb"
import {BsGraphUp} from "react-icons/bs"
import {MdOutlineHandshake} from "react-icons/md"
import { Button } from 'flowbite-react';
import { Card } from 'flowbite-react';

let Logo = require('../../assets/slider/hotel-3.jpeg')

const Home = () => {
  return (
    <div className='container-route'>
        
      <Slider />
      <div className='container-cards'>
        <div className='btn3 ' 
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000">
            <div className='container-cards-item-icon'>
                <TbBrandAirbnb size={"25px"}/>
            </div>
            <h2>Unete al Pool  25% 🔥 Conecta con nosotros </h2>
        </div>
        <div className='btn3'
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        >
            <div className='container-cards-item-icon'>
                <BsGraphUp size={"25px"}/>
            </div>
            <h2>100 Casas para el Pool🔄 <span>25% 🛩</span></h2>
        </div>
        <div className='btn3 ' 
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000">
            <div className='container-cards-item-icon'>
                <MdOutlineHandshake size={"25px"}/>
            </div>
            <h2>$2 million <span>staked</span></h2>
        </div>
      </div>

      {/**CArtas  */}
      

    <div>
<Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Logo} alt="logo"
      className='bg-blue-500'
    >
      <h5 className="bg-gray-100 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
      <Button
        gradientDuoTone="purpleToBlue"
        outline
        className="bg-black-200"
      >
        <p className='bg-green-800 text-black'>
          Pool Rewars Conect
        </p>
      </Button>
    </Card>
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Logo} alt="logo"
      className='bg-blue-500'
    >
      <h5 className="bg-gray-100 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p> 
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
      <Button
        gradientDuoTone="greenToBlue"
        outline
      >
        <p className="text-black">
          Unete a la Pool 🔥
        </p>
      </Button>
    </Card>

    
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Invierte en Casas y Obten 25% de Ganancias Pasivas <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Web 3.0 </span></h1>
<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

{/**Tablas */}
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Pool Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                    Estado
                </th>
                <th scope="col" className="px-6 py-3">
                    Total Pool
                </th>
                <th scope="col" className="px-6 py-3">
                    WalletConect
                </th>
            </tr>
        </thead>
        <tbody>

        <tr>
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    (Pool 1) NFT CASAS
                </th>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    11/08/21
                </td>
                <td className="px-6 py-4 font-medium text-green whitespace-nowrap dark:text-green">
                    Coming Soon
                </td>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                     $1.548💸
                </td>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Conect Wallet</a>
                </td>
            </tr>

            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    (Pool 2) NFT CASAS
                </th>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    17/08/19
                </td>
                <td className="px-6 py-4 font-medium text-green whitespace-nowrap dark:text-green">
                    Activo
                </td>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                     $150💸
                </td>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Conect Wallet</a>
                </td>
            </tr>

            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    (Pool 24) NFT CASAS
                </th>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    17/08/19
                </td>
                <td className="px-6 py-4 font-medium text-green whitespace-nowrap dark:text-green">
                    Activo
                </td>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                     $14.896💸
                </td>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Conect Wallet</a>
                </td>
            </tr>

            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    (Pool 420) NFT CASAS
                </th>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    17/08/19
                </td>
                <td className="px-6 py-4 font-medium text-green whitespace-nowrap dark:text-green">
                    Closet
                </td>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                     $999💸
                </td>
                <td class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Conect Wallet</a>
                </td>
            </tr>

            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    (Pool 4) NFT CASAS
                </th>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    17/08/19
                </td>
                <td className="px-6 py-4 font-medium text-green whitespace-nowrap dark:text-green">
                    Activo
                </td>
                <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                     $999💸
                </td>
                <td class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Conect Wallet</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

{/**Downloads */}

<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Descargar la App y Obten el Bonos de Bienvenida</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at  we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Go to Google Store
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

{/**markup */}



<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-700 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-700 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" className="dark:hidden h-[426px] md:h-[654px]" alt="" />
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" className="hidden dark:block h-[426px] md:h-[654px]" alt="" />
    </div>
</div>




    </div>

    </div>
  )
}

export default Home
