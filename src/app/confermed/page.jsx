import React from 'react'
import Image from 'next/image'
import confermed from '../photos/confermed.png'

function page() {
  return (
    <div className='confermed-main'>
      <div className='confermed-inner'>
        <Image  src={confermed}  alt="confermed img" width={250} height={250} className='conferm-img'/>
        <h1 className='conferm-text'> Your responce saved sucessfully </h1>
        <p className='conferms-team'>OUR TEAM WILL CONTACT YOU SOON</p>
        <button className='back-to-home'>BACK TO HOME</button>
      </div>
    </div>
  )
}

export default page