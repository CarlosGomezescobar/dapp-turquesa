import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EarnTemplate from '../../Components/EarnTemplate'
import NotFound from '../../Components/NotFound'
import { useSelector } from 'react-redux'
import Loading from '../../Components/Loading'
import Pools from '../../Data/contracts.json';

const EarnDinamic = () => {

    const {data} = useSelector((state)=> state.contract)

    const dataContract = data
    const {address} = useParams()
    
    // useEffect(()=>{
    //   if(dataContract !== ""){
    //     const pool =  dataContract.filter(pool=> pool.name == name)
    //     setDataPool(pool)
    //     return
    //   }
    // },[dataContract])

    // useEffect(()=>{
    //   if(dataContract !== ""){
    //     const pool =  dataContract.filter(pool=> pool.name == name)
    //     setDataPool(pool)
    //     return
    //   }
    // },[name])

    const pool =  Pools.filter(pool=> pool.address == address)

  return (
    <>
      {/* {dataContract == "" ? <Loading/> :  */}
      <>
        {pool == "" ? <NotFound/> : <EarnTemplate address={pool[0].address} namePool={pool[0].namePool} yieldField={pool[0].yieldField} strategy={pool[0].strategy} risk={pool[0].risk} pool={pool[0].poolSize} min={pool[0].minEntry} max={pool[0].maxEntry} progress={pool[0].progress} token={pool[0].token}/>}
      </>
      {/* } */}
    </>
  )
}

export default EarnDinamic
