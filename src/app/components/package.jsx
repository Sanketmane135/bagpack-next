"use client"
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Link from 'next/link';


export default function Package() {
    
const [packages, setPackages] = useState([]);

useEffect(() => {
  const fetchPackages = async () => {
    try {
      const res = await axios.get(
        "https://bagpackbackendweb.onrender.com/api/bagpack/builtpackages"
      );
      // console.log("Full API response:", res);
      // console.log("API response data:", res.data);

      setPackages(res.data.tripPacks);

    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  fetchPackages();
}, []);

// useEffect(() => {
//   console.log("Updated packages state:", packages);
// }, [packages]);


const PackageSkeleton = () => {
  return (
    <div className="package-skeleton">
       {[...Array(8)].map((_, i) => (
        <div className="package-card skeleton" key={i}>
          <div className="skeleton-img"></div>
          <div className="skeleton-text title"></div>
          <div className="skeleton-text small"></div>
          <div className="skeleton-text price"></div>
          <div className="skeleton-btn"></div>
        </div>
      ))}
    </div>
  );
};



  return (
    <div className='package-main'>
       
            <p className='explore'>Explore Our Top Pacakage</p>
        <div className='all-package'>
            {
                packages===null || packages.length === 0 ? (
                    <div className="loading">
                        <PackageSkeleton />
                        
                    </div>
                ) :
                
                packages.map((v,i)=>{
                    return(
                        <div className='package-1'key={i} >
                            <div className='pack-img'>
                                <img src={v.imageurl}alt='manali trip' className='manali-package-img'/>
                            </div>
                       
                        <h4 className='package-title'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                             {v.tripName}</h4>
                        <p className='pack-start' >Package Starting @</p>
                        <div className='price-div'>
                            <div className='price-div-inner'>
                                <h6 className='price'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>
                              {v.pricePerPerson}
                                </h6>
                                <p className='per'>per person</p>
                            </div>
                            
                            <Link href={`/knowmore/${v._id  }`}><button className='know-btn'>Know More</button></Link>
                            
                        </div>
                       
                    </div>

                    
                    )
                })
            }
        </div>
    </div>
  )
}

