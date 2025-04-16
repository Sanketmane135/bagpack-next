import React from 'react'
import whatsapp from '../photos/whatsapp.png'
import insta from '../photos/instagram.png'
import gmail from '../photos/email.png'
import Link from 'next/link'


export default function Footer() {

  return (
    <div className='footer-main'>
        <div className='footer-top'>
            <p className='leading'>
                Leading the way to your Dream Destintion
            </p>

            <div className='footer-img-div'>
                <a href ="https://chat.whatsapp.com/BQubvqcafBV3ZtmGLbUx4N"><img src={whatsapp.src} className='icon'  /></a>
                <a href='https://www.instagram.com/___sanket._.135'><img  src={insta.src} className='icon' /></a>
                <a href  = "mailto:sanketmane0407@gmail.com?subject=Hello&body=Hi, how are you?"><img src={gmail.src} className='icon' /></a>
            </div>

            <p className='leading'>
                Trust , Book , Revisit
            </p>

            <div className='footer-div-email'>
                <p className='developed'>Developed By </p>
                <p className='sanket'>Sanket Mane and Team</p>
            </div>
        </div>

        <div className='footer-middle'>
            <div className='footer-about-div'>
                <h4>About</h4>
                <p>At BagPack Trips & Tourism, we believe that every journey should be seamless, exciting, and budget-friendly. Our AI-powered trip planner helps you design personalized travel experiences, from selecting dream destinations to optimizing your budget and itinerary. Whether you're planning a solo adventure, a romantic honeymoon, or a family getaway, we take care of the details so you can focus on making memories.

Let us turn your travel </p>
            </div>

           <div className='footer-nav-div-main'>
                <div className='footer-nav-div'>
                    <h4>Company</h4>
                    <div >
                    
                           <Link  href={"/"}> <li className='top-foot'>Home</li></Link>
                           <Link  href={"/nav"}><li  className='top-foot' >Navbar</li></Link>
                           <Link  href={"/contactus"}><li className='top-foot'>Contact</li></Link>
                           <Link  href={"/nav"}> <li className='top-foot' >Service</li></Link>
                            
                    </div>
                </div>


                <div className='resource-div'>
                    <h4>Resourses</h4>
                    <div>
                        <li>Problem Solution</li>
                        <li>Customers Reviews</li>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer-bottom'>
            
                <p>All Rights Reserved</p>
                
           
                <Link href={"/terms"} className='navbar-heading-inner'><p>Terms | Conditions</p></Link>
                <p> Last Update 2025</p>

                <p>Safe payment methods</p>
            
        </div>
    </div>
  )
}

