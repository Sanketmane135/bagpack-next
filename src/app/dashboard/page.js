"use client";
import React, { useState } from 'react'
import andaman from '../photos/andaman-pack.webp'
import Footer from '../components/footer';

export default function Dashboard() {

    const [btncolor, setBtnColor]=useState(0)
  return (
    <div className='dashboard-main'>

        {/* <div className='dashboard-top'>
            <h3 className='my-dash'>My Dashboard</h3>

            <div className='dash-top-frames'>
                <div className='first-frame'>
                    <div className='first-frame-top'>
                        <h5>Upcoming trips</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m397-115-99-184-184-99 71-70 145 25 102-102-317-135 84-86 385 68 124-124q23-23 57-23t57 23q23 23 23 56.5T822-709L697-584l68 384-85 85-136-317-102 102 26 144-71 71Z"/></svg>
                    </div>
                    <h4>0</h4>
                    <p>Adventure Await</p>    
                </div>

                <div className='second-frame'>
                    <div className='second-frame-top'>
                        <h5>Total spent</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z"/></svg>
                    </div>    
                    <h4><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M559-120 286.67-402.67v-70.66H420q55.67 0 97.17-36.17T566-606.67H240v-66.66h318.67q-14.34-43.67-52.5-71.84Q468-773.33 420-773.33H240V-840h480v66.67H574q20 19 34.33 46.33 14.34 27.33 21 53.67H720v66.66h-87q-8 89-68.33 144.5-60.34 55.5-144.67 55.5h-44.33L651.33-120H559Z"/></svg>25000</h4>
                    <p>Lifetime travel investment</p>  
                </div>

                <div className='third-frame'>
                    <div className='third-frame-top'>
                        <h5>Totle booked trips</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
                    </div>    
                    <h4>15</h4>
                    <p>sucessfull 15 trips with us</p>  
                </div>
            </div>


          


        </div> */}

        <div className='dashboard-bottom'>

            <h4 className='your-booked'>Your Booked Trips</h4>
{/* 
            <div className='booked-status-row'>
                <button className={`all-btn ${btncolor==0?'all-btn-after':''}`} onClick={()=>{setBtnColor(0)}}>All</button>
                <button  className={`upcoming-btn ${btncolor==1?'upcoming-btn-after':''}`} onClick={()=>{setBtnColor(1)}}>Upcoming</button>
                <button  className={`completed-btn1 ${btncolor==2?'completed-btn-after':''}`} onClick={()=>{setBtnColor(2)}}>Completed</button>
                <button  className={`cancled-btn ${btncolor==3?'cancled-btn-after':''}`} onClick={()=>{setBtnColor(3)}}>Cancelled</button>
            </div> */}

            <div className='booked-status-frames'>

                <div className='dash-frame-main-div'>
                    <div className='dash-frame-main'>
                        {/* <img src={andaman.src} className='dash-frame-img' /> */}
                    </div>
                   
                    <div className='frame-data-main'>
                        <h3 className='frame-location'>Kolhapur, Maharashtra</h3>
                        <p className='trip-id'>Trip id : MH-KO-752</p>
                        <div className='dash-date-div'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                            <p>25.02.2025 -  2.03.2025</p>
                        </div>

                        <div className='dash-traveller-div'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                            <p>10 Travellers</p>
                        </div>

                        <div className='dash-price-div'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M531-260h96v-3L462-438l1-3h10q54 0 89.5-33t43.5-77h40v-47h-41q-3-15-10.5-28.5T576-653h70v-47H314v57h156q26 0 42.5 13t22.5 32H314v47h222q-6 20-23 34.5T467-502H367v64l164 178ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            <p>22550</p>
                        </div>

                        
                    </div>

                </div>
                
            </div>

        </div>

        <Footer/>

    </div>
  )
}
