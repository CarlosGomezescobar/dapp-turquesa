import React, { useRef, useState } from 'react'
import collection1 from "../../assets/slider/hotel-1.jpeg"
import collection2 from "../../assets/slider/hotel-2.jpeg"
import collection3 from "../../assets/slider/hotel-3.jpeg"

import card1 from "../../assets/slider/hotel-3.jpeg"
import card2 from "../../assets/slider/hotel-4.jpeg"
import card3 from "../../assets/slider/hotel-5.jpeg"
import Button2 from '../../Components/Button2'

const Collection = () => {
    const [select, setSelect] = useState(0)
    const ref0 = useRef()
    const itemsCollection = [
        {   
            image: card1,
            tittle: "Maras & Hatay Charity",
            description: "Donations NFT Collection designed by BeNFT",
            state: "Approve"
        },
        {
            image: card2,
            tittle: " Pass Genesis",
            description: "Donations NFT Collection designed by BeNFT",
            state: "Soon"
        },
        {
            image: card3,
            tittle: " NFT Pass Bear",
            description: "Donations NFT Collection designed by BeNFT",
            state: "12 december"
        }
    ]

    const selectCard = (i)=>{
       
        const items = ref0.current.children;
        console.log(items)
        if(i==0){
            setSelect(0)
            items[0].classList.add("collection-active")
            items[1].classList.remove("collection-active")
        } else if(i==1){
            setSelect(1)
            items[1].classList.add("collection-active")
            items[0].classList.remove("collection-active")
        }else if(i==2){
            setSelect(2)
            items[2].classList.add("collection-active")
            items[0].classList.remove("collection-active")
        }
        
    }

    const selectImg = ()=>{
        if(select==0){
            return <img src={collection1} alt="" />
        } else if(select == 1){
            return <img src={collection2} alt="" />
        }
        if(select==2){
            return <img src={collection3} alt="" />
        } else if(select == 1){
            return <img src={collection2} alt="" />
        }
    }

  return (
    <div>
      <div className='container-route collection'>
        <div className='bg-collection'
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="800">
            {/* {
                select == 0 ? <img src={collection1} alt="" /> : <img src={collection2} alt="" />
            } */}
            {
                selectImg()
            }

        </div>
        <div ref={ref0} className='container-collection'
        data-aos="fade-up"
        data-aos-duration="800">

            {
            itemsCollection.map((item,i)=> (
                <div key={i} onClick={()=>selectCard(i)} className={`item-collection ${i == 0 ? "collection-active" : ""} `} >
                    <img className='prueba' src={item.image} alt="" />
                    <div className='item-collection-txt'>
                        <h3>{item.tittle}</h3>
                        <p>{item.description}</p>
                        <Button2 txt={item.state}/>
                    </div>
                </div>

            ) )
            }
        </div>
      </div>
    </div>
  )
}

export default Collection
