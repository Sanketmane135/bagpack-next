"use state";
import React from 'react'
import whatsapp from '../photos/whatsapp-icon.png'
import insta from '../photos/intsa-icon.png'
import gmail from '../photos/gmail-icon.png'

export default function Contact() {
  return (
    
    <div className='contact-div'>
        <p className='speaktous'>Speak to Us, We are always available...</p>
        <div className='contact-div-lower'>

            <div className='contact-whatsapp'>
                <div className='media-logo-div'>
                    <img src={whatsapp.src} alt='whatsapp' className='whatsapp-icon'/>
                </div>
                <h4 className='whasapp-title'>What's App</h4>
                <p>Wait less than 5 min</p>
                <p> Most popular and quickest way to get help</p>
                <button className='know-btn'  onClick={() => window.location.href ="https://chat.whatsapp.com/BQubvqcafBV3ZtmGLbUx4N"} > What's App</button>
            </div>

            <div className='contact-instagram' >
                <div className='media-logo-div'>
                    <img src={insta.src} alt='instagram' className='whatsapp-icon '/>
                </div>
                <h4 className='whasapp-title'>Instagram</h4>
                <p>Wait less than 5 min</p>
                <p> Most popular and quickest way to get help</p>
                <button className='know-btn' onClick={() => window.location.href =" https://www.instagram.com/___sanket._.135"}> Instagram</button>
            </div>

            <div className='contact-gmail'>
                <div className='media-logo-div'>
                    <img src={gmail.src} alt='gmail' className='whatsapp-icon '/>
                </div>
                <h4 className='gamil-title'>G-Mail</h4>
                <p>Wait less than 5 min</p>
                <p className='email-p'> sanketmane0407@gmail.com</p>
                <button className='know-btn'  onClick={() => window.location.href  = "mailto:sanketmane0407@gmail.com?subject=Hello&body=Hi, how are you?"}>G-mail</button>
            </div>

        </div>
    </div>
  )
} 
