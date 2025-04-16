"use client";
import React from 'react'
import { features } from '../data/features'
import logo from '../photos/college.png'

export default function WhyUs() {
  return (
   
    <div className='why-us-main'>
            
        <div className='why-us-main-left'>
            <div className='checkout-div'>
                <h5> Check out our <span>Unique</span> Functionalities </h5>
                <p>TRUST , BOOK , REVISIT</p>
             </div>

             {
                features.map((v,i)=>{
                    return(
                        <div className='features-div'>
                            <div className='features-title'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
                                <p className='title-des'>{v.title}</p>
                            </div>
                            <p className='title-below'>{v.description} </p>
                
                        </div>
                    )
                })
             }
             
        </div>

        <div  className='why-us-main-right'>
            <img src={logo.src} className='whyus-img' />
        </div>

    </div>
    
  )
}
