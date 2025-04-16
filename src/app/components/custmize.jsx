
"use client";
import React from 'react'
import custom from '../photos/man02.png'
import cloud from '../photos/cloud.png'
import Link from 'next/link';

export default function Custmize() {
  return (
    <div className='custmize-main'>

        <h5 className='customize-title'>Customize Your Dream Trip Here With Us</h5>

        <div className='cloud-div'>

          <div className='cloud-div-inner'>
            <p className='not'>Not Interested In Our Packages..?</p> 
            <p className='dont'>Don't Worry </p>
            <p className='now'>Now Customize Your Trip With Us</p>
            <Link href={"/custom"} ><button className='know-btn'>Customize</button></Link>
         </div>

         <img src={cloud.src} alt='message' className='cloud-msg' />
          
        </div>

        <div>
          <img  src={custom.src} alt='man' className='man-idea'/>
        </div>

    </div>
  )
}
