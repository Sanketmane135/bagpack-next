"use client";
import React, { useState } from 'react'
import logo from '../photos/logo2.png'
import Custmize from './custmize'
import WhyUs from './whyUs'
import Contact from './contact'
import like from '../photos/like.png'
import dislike from '../photos/dislike.png'
import person from '../photos/user.png'
import Footer from './footer'


export default function Nav2() {

  const[value,setValue] = useState(1)
    let[state,setState]=useState(false)


const returnFun=()=>{
    switch (value) {
      case 1:
        return(
          <Custmize/>
        )
      case 2:
        return(
          <WhyUs/>
        )
      case 3:
        return(
          <Contact/>
        )
      case 4:
        return(
         <>
         <div className='reviews-main'>
        
        <div className={`review-black ${state?'review-black-after':''}`}>

        </div>

        <div className={`give-review-modal ${state?'give-review-modal-after':''}`}>

            <div className='review-top-title'>
                <h3>Give your review</h3>
                <button onClick={()=>{setState(!state)}} className='cancle-btn'>Cancle</button>
            </div>

            <div className='review-bottom-div'>
                <div className='review-input-first'>
                    <label >Add title </label>
                    <input type="text"/>
                </div>

                <div  className='review-input-second'>
                    <label >Review Description </label>
                    <textarea type="text"/>
                </div>

                <div  className='review-input-third'>
                    <label className='give-review-title'>Give Rating between 0-5</label>
                    <div className='review-input-third-bottom'>
                     
                        <div className='rating-inner-div1'>
                            <input type="radio" name="" id="" />
                            <label>1</label>
                           
                        </div>
                        <div className='rating-inner-div1'> 
                        <input type="radio" name="" id="" />
                            <label>2</label>
                           
                        </div>
                        <div className='rating-inner-div1'>
                        <input type="radio" name="" id="" />
                            <label>3</label>
                           
                        </div>
                        <div className='rating-inner-div1'>
                        <input type="radio" name="" id="" />
                            <label>4</label>
                           
                        </div>
                        <div className='rating-inner-div1'>
                        <input type="radio" name="" id="" />
                            <label>5</label>
                          
                        </div>
                    </div>
                </div>

            </div>
            <button className='submit-btn'>Submit</button>

        </div>

        <div className='reviews-left'>
            <div className='revies-left-inner'>
                <h3 className='cust-rate'>Custmers Ratings</h3>
                <p className='based-on'>Based on average of all ratings</p>
                <div className='star-rating-div'>
                    <h2>4.5</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e2b618">
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                    </svg>
                    
                </div>

                <div>
                        <button className='give-review' onClick={()=>{setState(!state)}}>Give Review</button>   
                </div>
            </div>
        </div>

        <div className='reviews-right'>
           <div className='reviews-right-top'>
                <h3>Trip Reviews</h3>

                <select className="property-select" name="property">
                        <option value="bungalow">All Ratings</option>
                        <option value="villa">5 Star</option>
                        <option value="room">4 Star</option>
                        <option value="hotel">3 Star</option>
                        <option value="room">2 Star</option>
                        <option value="hotel">1 Star</option>
                </select>

           </div>

           <div className='reviews-right-bottom'>
                    <div className='review-frame'>
                        <div className='frame-top-img'>
                            <div className='review-img'>
                                <img src={person} alt='' className='user'/>
                            </div>
                          
                            <div className='frame-top-second-div'>
                                <h2>Title is shown here</h2>
                                <div className='frame-top-second-div-inner'>
                                    <p className='inner-stars'>5 *****</p>
                                    <p className='inner-name'>Sanket Mane</p>
                                    <p className='inner-dates'>: 25 July 2025</p>
                                </div>
                            </div>
                            
                        </div>


                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa excepturi perferendis quibusdam, iste odio culpa est distinctio dignissimos ullam quasi magnam ab, reprehenderit maiores minima omnis similique officia vero.
                            </p>
                        </div>


                        <div className='frame-bottom-down'>
                            <p>Was this review helpful..?</p>
                            <img src={like} alt="like" className='like' />
                            <img src={dislike} alt="dislike" className='dislike'/>
                        </div>
                    </div>
                    <div className='review-frame'>
                        <div className='frame-top-img'>
                            <div className='review-img'>
                                <img src={person} alt='' className='user'/>
                            </div>
                          
                            <div className='frame-top-second-div'>
                                <h2>Title is shown here</h2>
                                <div className='frame-top-second-div-inner'>
                                    <p className='inner-stars'>5 *****</p>
                                    <p className='inner-name'>Sanket Mane</p>
                                    <p className='inner-dates'>: 25 July 2025</p>
                                </div>
                            </div>
                            
                        </div>


                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa excepturi perferendis quibusdam, iste odio culpa est distinctio dignissimos ullam quasi magnam ab, reprehenderit maiores minima omnis similique officia vero.
                            </p>
                        </div>


                        <div className='frame-bottom-down'>
                            <p>Was this review helpful..?</p>
                            <img src={like} alt="like" className='like' />
                            <img src={dislike} alt="dislike" className='dislike'/>
                        </div>
                    </div>
                    <div className='review-frame'>
                        <div className='frame-top-img'>
                            <div className='review-img'>
                                <img src={person} alt='' className='user'/>
                            </div>
                          
                            <div className='frame-top-second-div'>
                                <h2>Title is shown here</h2>
                                <div className='frame-top-second-div-inner'>
                                    <p className='inner-stars'>5 *****</p>
                                    <p className='inner-name'>Sanket Mane</p>
                                    <p className='inner-dates'>: 25 July 2025</p>
                                </div>
                            </div>
                            
                        </div>


                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa excepturi perferendis quibusdam, iste odio culpa est distinctio dignissimos ullam quasi magnam ab, reprehenderit maiores minima omnis similique officia vero.
                            </p>
                        </div>


                        <div className='frame-bottom-down'>
                            <p>Was this review helpful..?</p>
                            <img src={like} alt="like" className='like' />
                            <img src={dislike} alt="dislike" className='dislike'/>
                        </div>
                    </div>

                
           </div>

        </div>

    </div>
         </>
        )
    }
}
  
  return (
    <>
    <div className='navbar-main'>
        <div className='navbar-img-div'>
            <img src={logo} alt=""  className='cust-logo' />
        </div>
        <ul className='navbar-ul-div'>
            <li >Home</li>
            <li className={`sanketx ${value==1?'firstclass':''}`} onClick={()=>{setValue(1)}}>Customize</li>
            <li className={`sanketx ${value==2?'secondclass':''}`} onClick={()=>{setValue(2)}}>Features</li>
            <li className={`sanketx ${value==3?'thirdclass':''}`} onClick={()=>{setValue(3)}}>Contact</li>
            <li className={`sanketx ${value==4?'fourthclass':''}`} onClick={()=>{setValue(4)}}>Reviews</li>
        </ul>
    </div>
    {returnFun()}
    <Footer/>
    </>
  )
}
