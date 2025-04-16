"use client"
import React from 'react'
// import  travelDestinations  from '../data/packageData'
import north1 from '../photos/north-pack.webp'
import goa1 from '../photos/goa-pack.webp'
import kerala1 from '../photos/kerala-pack.webp'
import maharashtra1 from '../photos/maharashtra-pack.webp'
import rajasthan1 from '../photos/rajasthan-pack.webp'
import kashmir1 from '../photos/kashmir-pack.webp'
import himachal1 from '../photos/himachal-pack.webp'
import andaman1 from '../photos/andaman-pack.webp'
import gujarat1 from '../photos/gujarat-pack.webp'
import Link from 'next/link'






export default function Package() {
    

  return (
    <div className='package-main'>
       
            <p className='explore'>Explore Our Top Pacakage</p>
        <div className='all-package'>
            {
                travelDestinations.map((v,i)=>{
                    return(
                        <div className='package-1'key={i} >
                            <div className='pack-img'>
                                <img src={v.image}alt='manali trip' className='manali-package-img'/>
                            </div>
                       
                        <h4 className='package-title'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                             {v.name}</h4>
                        <p className='pack-start'>Package Starting @</p>
                        <div className='price-div'>
                            <div className='price-div-inner'>
                                <h6 className='price'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>
                              {v.price}
                                </h6>
                                <p className='per'>per person</p>
                            </div>
                            
                            <Link href={`/knowmore/${v.id}`}><button className='know-btn'>Know More</button></Link>
                            
                        </div>
                       
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}


const travelDestinations = [
   { 
       id: 0, 
       name: "Goa", 
       price: "50000", 
       image: goa1.src
    },

    { 
       id: 1, 
       name: "Kerala", 
       price: "20000", 
       image: kerala1.src
    },

  
    { 
       id: 2, 
       name: "Maharashtra", 
       price: "15000", 
       image:maharashtra1.src
    },
    { 
       id: 3, 
       name: "Rajsthan", 
       price: "10000", 
       image: rajasthan1.src
    },
    { 
       id: 4, 
       name: "North East", 
       price: "10000", 
       image: north1.src
    },
    { 
       id: 5, 
       name: "Kashmir", 
       price: "80000", 
       image: kashmir1.src
    },
    { 
       id: 6, 
       name: "Himachal pradesh", 
       price: "70000", 
       image: himachal1.src
    },
    { 
       id: 7, 
       name: "Andaman", 
       price: "90000", 
       image:andaman1.src
    },
    { 
       id: 8, 
       name: "Gujarat", 
       price: "55000", 
       image:gujarat1.src
    },



 ]

