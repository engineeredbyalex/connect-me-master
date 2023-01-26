import React from 'react'
import FabLabLogo from "../Assets/images/Sponsors/fablablogo.webp"
import PfcLogo from "../Assets/images/Sponsors/pfclogo.webp"
import UvtLogo from "../Assets/images/Sponsors/uvtlogo.webp"

function Sponsors() {
  return (
    <div className='h-[60vh] w-screen bg-[#a090c1] flex items-center justify-center flex-col'>
        <h2 className='uppercase text-6xl font-semibold text-white'>Powerd By</h2>
        <div className='w-screen h-[50vh] flex flex-col items-center justify-evenly lg:flex-row'>
            <img width={150} src={FabLabLogo}/>
            <img width={150} src={PfcLogo}/>
            <img width={150} src={UvtLogo}/>
        </div>
    </div>
  )
}

export default Sponsors