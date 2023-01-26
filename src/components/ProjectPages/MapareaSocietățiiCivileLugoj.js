import React from 'react'
import projectImg from "../Assets/images/IndividualProjects/MapareasocietățiicivileLugoj.webp"

function MapareaSocietățiiCivileLugoj() {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
        <div className='w-screen h-[50vh] flex items-center justify-evenly'>
            <div className='w-[50%] text-[#434459]'>
                <h2 className='text-5xl text-center'>Maparea societății civile Lugoj</h2>
                <p className='text-2xl text-center'>Studiul poate ajuta organizațiile din Lugoj, Primăria Municipiului Lugoj ( dar și alte instituții publice), cetățenii orașului Lugoj, alte organizații și instituții din afara Lugojului. Cu ajutorul analizei dezvoltate de noi, cei ce o vizualizează pot avea o viziune mult mai clară asupra societății civile din Lugoj și modul în care se conectează componentele acesteia. </p>
            </div>
        </div>
        <div className='w-[50%] flex items-center justify-center'>
          <img width={700} height={700} src={projectImg} />
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default MapareaSocietățiiCivileLugoj