"use client";

import React, { useState } from 'react'

import maharaj1 from './photos/maharaj.webp'
import Image from 'next/image';

import kerala from './photos/kerala.webp'
import valley from './photos/valley.webp'
import plane from './photos/aero.webp'
import rajsatan from './photos/rajsthan.webp'
import logo from './photos/logo2.png'
import ghat from './photos/ghat.webp'
import beach from './photos/beach.webp'

import Custmize from './components/custmize';
import Package from './components/package';
import WhyUs from './components/whyUs';
import Contact from './components/contact';
import Footer from './components/footer';
import Link from 'next/link';
import GoogleMap from './components/map';
import { usePathname } from "next/navigation";


export default function Front() {
  const [login,setLogin]=useState(false)
  const [modal,setModal]=useState(false)
  let [number, setNumber] =  useState(false)





let modalFunction=()=>{
  setLogin(!login)

}
const loginSwitch=()=>{
  const pathname = usePathname();
  console.log(pathname);
  
  switch(number){
    case true:
      return(
        <button onClick={()=>{setModal(!modal)}} className='log-in-after'>
          <div className='after-login-inner'>
            <p className='login-start'>S</p>
            <p className='profile'>My Profile</p>
          </div>
        </button>
        
      )
    case false:
      return(
        
          <Link href={"/login"}><button className='log-in-btn' >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
            Log In
        </button></Link>
        
      )
  }
}



  return (
    <>
      <div className='front-main'>
        <img src={maharaj1.src} className='maharaj-img' />
        <img src={kerala.src} className='kerala-img' />
        <img src={valley.src} className='valley-img' />
        <img src={plane.src} className='plane-img' />
        <img src={rajsatan.src} className='rajstan-img' />
        <img src={logo.src} className='logo-img' />
        <img src={ghat.src} className='ghat-img' />
        <img src={beach.src} className='beach-img' />
        <p className='statement'>"  WANDER MORE, WORRY LESS – YOUR JOURNEY BEGINS HERE!  "</p>
        <div className='nav-bar-front'>

          {/* <Link href="/toppackages"><h5>Explore Packages |</h5></Link>
          <Link href="/custom"><h5>Customize Trip |</h5></Link>
          <Link href="/contactus"><h5>Contact</h5></Link> */}

          <h5 className='navbar-heading'><Link href={"/nav"} className='navbar-heading-inner'> CLICK EXPLORE AT ONE PLACE</Link></h5>
        </div>
        <div className='log-in-div'>
          {loginSwitch()}
        </div>

        <div className={`modal-div ${modal?"modal-div-after":''}`}>
            <div className='modal-profile-div'>
              <div className='modal-inner-div'>
                <p className='profile-letter'>S</p>
              </div>
              <p className='profile-full-name'>Sanket Mane</p>
            </div>
            <h4 className='current-booking'>Current Bookings</h4>
           <h4 className='booking-history '> <Link href={"/dashboard"} className='.navbar-heading-inner'>My Dashboard</Link></h4>
            <button className='log-out'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>Log Out</button>
        </div>
    </div>
    <Package/>
    <Custmize/>
   <GoogleMap/>
    <WhyUs/>
    <Contact/>
    <Footer/>  
    </>
  )
}
