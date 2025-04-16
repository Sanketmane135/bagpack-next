"use client";
// import { pacakgesData1 } from '@/app/data/pacakges'; 
import { usePathname } from "next/navigation";
// import Footer from "@/app/components/footer"  ;
import {pacakgesData1} from "../../data/pacakges";
import Footer from "../../../app/components/footer";
import Link from "next/link";
import goaknow from "../../photos/goa-know.jpg";


export default function Knowmore() {

const pathname = usePathname(); 
const currentId = pathname.split("/").pop()

  return (
    <div className='knowmore-main'>
        <img src={pacakgesData1[currentId].photo.src} className="know-img-first" alt="goa"/>
          <h4 className="place-name">{pacakgesData1[currentId].title}</h4>

        <div className='knowmore-price-div'>
          <div className='knowmore-inner'>
            <div className='knowmore-price-div-left'>

              <h5 className='price-h5'>{pacakgesData1[currentId].price} </h5>
              <p className='per-person-p'>per person</p>
              <p className='days-p'>{pacakgesData1[currentId].days} Days</p>

              <div className='rating-and-review'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#f9cb24"><path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  <p >4.6 Ratings</p>
              </div>

            </div>

          <div className='knowmore-price-div-right'>
           <Link href={"/book"}><button className='know-btn'>Book Now</button></Link>
          </div>
          </div>

        </div>


        <div className='knowmore-details-div'>

          <div className='knowmore-details-div-left'>

              <div className='about-this-package'>
                <h6>About this package</h6>
                <p>{pacakgesData1[currentId].about}</p>

              </div>

              <div className='highlight'>
                <h6>Highlights</h6>
                {
                  pacakgesData1[currentId].highlights.map((v,i)=>{
                    return(
                      <div className='highlights-inner' key={i}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C1AF6"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>
                      <p>{v}</p>
                    </div>
                    )
                  })
                }
          
              </div>


              <div className='itineray-div'>
                <h5>Itineray</h5>
                  {
                    pacakgesData1[currentId].Itineray.map((v,i)=>{
                      return(
                        <div className='itineray-div-inner' key={i}>
                          <div >
                              
                              <div className='itineray-count'>{v.day}</div>
                              <h6 className='itineray-title'>{v.title}</h6>
                              <p className='itineray-p'>{v.travel}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                
              </div>

          </div>

          <div className='knowmore-details-div-right'>
              <div className='whats-included'>
                <h4>
                  What's Included
                </h4>
                  {
                    pacakgesData1[currentId].included.map((v,i)=>{
                      return(
                        <div className='whats-included-inner' key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C1AF6"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                        <p>{v} </p>
                    </div>
                      )
                    }
                    )
                  }
              </div>
          </div>
        </div>
        <div className='knowmore-booking-div'> 
          <div className='booking-div-inner'>
            <h5>Are You Ready For It...?</h5>
            <p>Book Your Majestic Trip Today & Create Memories That Will Last a Lifetime</p>
         
          </div>
        </div>
        <Link href={"/book"}><button className='know-btn'>Book Now</button></Link>

        <Footer/>
    </div>
  )
}
