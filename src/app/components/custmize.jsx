"use client";
import React from 'react';
import custom from '../photos/man02.png';
import cloud from '../photos/cloud.png';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Custmize() {

  const [localValue, setLocalValue]=useState('');
  const router = useRouter();

  const handleClick=()=>{
    if (localValue.length > 5) {
      router.push('/custom');
    } else {
      alert("You dont have logined log in first");
      router.push('/login');
    }
  }

  useEffect(() => {
        const email = window.localStorage.getItem("mailsign") || '';
        setLocalValue(email);
      }, []);
  
  
  return (
    <div className='custmize-main'>

        <h5 className='customize-title'>Customize Your Dream Trip Here With Us</h5>

        <div className='cloud-div'>

          <div className='cloud-div-inner'>
            <p className='not'>Not Interested In Our Packages..?</p> 
            <p className='dont'>Don't Worry </p>
            <p className='now'>Now Customize Your Trip With Us</p>
           <button className='know-btn' onClick={handleClick}>Customize</button>
         </div>

         <img src={cloud.src} alt='message' className='cloud-msg' />
          
        </div>

        <div>
          <img  src={custom.src} alt='man' className='man-idea'/>
        </div>

    </div>
  )
}
