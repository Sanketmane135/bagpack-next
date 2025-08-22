// "use client";
// import React, { useState, useEffect } from 'react'
// import logo from '../photos/logo2.png'
// import {addReview, getReview} from "../../actions/review.action"
// import like from '../photos/like.png'
// import dislike from '../photos/dislike.png'
// import person from '../photos/user.png'
// import Custmize from '../components/custmize';
// import WhyUs from '../components/whyUs';
// import Contact from '../components/contact';
// import Footer from '../components/footer';
// import { useRouter } from 'next/navigation';





// export default function Nav() {
    
//     useEffect(()=>{
//         const getReviewData = async () => {
//             const data = await getReview()
//             setReviewData(data)
//             console.log(data);
//         }
//         getReviewData()
//     },[])

//     const [reviewData, setReviewData] = useState([])
//     const [reviewTitle, setReviewTitle] = useState("")
//     const [reviewDescription, setReviewDescription] = useState("")
//     const [reviewRating, setReviewRating] = useState(0);
//     const [localValue, setLocalValue]=useState('');
 
//     const router=useRouter();
//     const[value,setValue] = useState(1)
//     let [state,setState]=useState(false)

//      const lengthData= reviewData.length
//      let addition=0
//      console.log(lengthData);


//     const totalAddition =reviewData.map((v,i)=>{
//         return addition = v.rating+addition
//      })

//      const finalRating = addition/lengthData
   

//     const addReviewToDatabase = async() => {
//         console.log("Add Review Function Calls");
//         if( reviewDescription=="" || reviewRating==0){
//             alert("Plz enter all the data")
   

//         }else{
//             const result = await addReview({title:localValue,description:reviewDescription,rating:reviewRating})
//           setState(!state)
//           alert("Review added successfully..!")
//         }
        
//         setReviewDescription("")
//         setReviewRating(0)
//         setReviewTitle("")
//     }

    
//      useEffect(() => {
//             const email = window.localStorage.getItem("mailsign") || '';
//             setLocalValue(email);
//           }, []);
      
      
//     const handleClick=()=>{
//             if (localValue.length > 5) {
//                 setState(true);
//             } else {
//               alert("You dont have logined log in first");
//               router.push('/login');
//             }
//           }



// const returnFun=()=>{
//     switch (value) {
//       case 1:
//         return(
//           <Custmize/>
//         )
//       case 2:
//         return(
//           <WhyUs/>
//         )
//       case 3:
//         return(
//           <Contact/>
//         )
//       case 4:
//         return(
//          <>
//          <div className='reviews-main'>
        
//         <div className={`review-black ${state?'review-black-after':''}`}>

//         </div>

//         <div className={`give-review-modal ${state?'give-review-modal-after':''}`}>

//             <div className='review-top-title'>
//                 <h3>Give your review</h3>
//                 <button onClick={()=>{setState(!state)}} className='cancle-btn'>Cancle</button>
//             </div>

//             <div className='review-bottom-div'>

//                 <div  className='review-input-second'>
//                     <label >Review Description </label>
//                     <textarea type="text" value={reviewDescription} onChange={(e)=>setReviewDescription(e.target.value)}/>
//                 </div>

//                 <div  className='review-input-third'>
//                     <label className='give-review-title'>Give Rating between 0-5</label>
//                     <div className='review-input-third-bottom'>
                     
//                         <div className='rating-inner-div1'>
//                             <input type="radio" name="" id="" onChange={(e)=>setReviewRating(1)} value={reviewRating} />
//                             <label>1</label>
                           
//                         </div>
//                         <div className='rating-inner-div1'> 
//                         <input type="radio" name="" id="" onChange={(e)=>setReviewRating(2)} value={reviewRating}/>
//                             <label>2</label>
                           
//                         </div>
//                         <div className='rating-inner-div1'>
//                         <input type="radio" name="" id="" onChange={(e)=>setReviewRating(3)} value={reviewRating}/>
//                             <label>3</label>
                           
//                         </div>
//                         <div className='rating-inner-div1'>
//                         <input type="radio" name="" id="" onChange={(e)=>setReviewRating(4)} value={reviewRating}/>
//                             <label>4</label>
                           
//                         </div>
//                         <div className='rating-inner-div1'>
//                         <input type="radio" name="" id="" onChange={(e)=>setReviewRating(5)} value={reviewRating}/>
//                             <label>5</label>
                          
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <button className='submit-btn' onClick={addReviewToDatabase}>Submit</button>

//         </div>

//         <div className='reviews-left'>
//             <div className='revies-left-inner'>
//                 <h3 className='cust-rate'>Custmers ratings</h3>
//                 <p className='based-on'>Based on average of all ratings</p>
//                 <div className='star-rating-div'>
//                     <h2>{finalRating}</h2>
//                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e2b618">
//                         <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
//                     </svg>
//                 </div>

//                 <div>
//                         <button className='give-review' onClick={ handleClick}>Give Review</button>   
//                 </div>
//             </div>
//         </div>

//         <div className='reviews-right'>
//            <div className='reviews-right-top'>
//                 <h3>Trip Reviews</h3>

               

//            </div>

//            <div className='reviews-right-bottom'>
                    
//                     {reviewData.map((v,i)=><div className='review-frame' key={i}>
//                         <div className='frame-top-img'>
//                             <div className='review-img'>
//                                 <img src={person.src} alt='' className='user'/>
//                             </div>
                          
//                             <div className='frame-top-second-div'>
//                                 <h2>{v.title}</h2>
//                                 <div className='frame-top-second-div-inner'>
//                                     <p className='inner-stars'>{v.rating} 
//                                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e2b618">
//                                         <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
//                                         </svg>
                                        

//                                     </p>
//                                     <p className='inner-dates'>{v.timestamp}</p>
//                                 </div>
//                             </div>
                            
//                         </div>


//                         <div>
//                             <p>{v.description}</p>
//                         </div>
//                     </div>)}

                
//            </div>

//         </div>

//     </div>
//          </>
//         )
//     }
// }
  
//   return (
//     <>
//     <div className='navbar-main'>
//         <div className='navbar-img-div'>
//             <img src={logo} alt=""  className='cust-logo' />
//         </div>
//         <ul className='navbar-ul-div'>
          
//             <li className={`sanketx ${value==1?'firstclass':''}`} onClick={()=>{setValue(1)}}>Customize</li>
//             <li className={`sanketx ${value==2?'secondclass':''}`} onClick={()=>{setValue(2)}}>Features</li>
//             <li className={`sanketx ${value==3?'thirdclass':''}`} onClick={()=>{setValue(3)}}>Contact</li>
//             <li className={`sanketx ${value==4?'fourthclass':''}`} onClick={()=>{setValue(4)}}>Reviews</li>
//         </ul>
//     </div>
//     {returnFun()}
//     <Footer/>
//     </>
//   )
// }


"use client";
import React, { useState, useEffect } from 'react'
import logo from '../photos/logo2.png'
import { addReview, getReview } from "../../actions/review.action"
import person from '../photos/user.png'
import Custmize from '../components/custmize';
import WhyUs from '../components/whyUs';
import Contact from '../components/contact';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const [reviewData, setReviewData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewDescription, setReviewDescription] = useState("")
  const [reviewRating, setReviewRating] = useState(0)
  const [localValue, setLocalValue] = useState('')
  const [value, setValue] = useState(1)
  const [state, setState] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const getReviewData = async () => {
      try {
        setLoading(true)
        const data = await getReview()
        if (!data || data.length === 0) {
          throw new Error("No data found")
        }
        setReviewData(data)
        setError(false)
      } catch (err) {
        console.error("Review fetch error:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getReviewData()
  }, [])

  useEffect(() => {
    const email = window.localStorage.getItem("mailsign") || ''
    setLocalValue(email)
  }, [])


  const [curretDate, setCurretDate]=useState("");
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');      
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const year = today.getFullYear();  
  const currentDate= `${day}-${month}-${year}`;

  


  const addReviewToDatabase = async () => {
    console.log("Add Review Function Calls");
    if (reviewDescription === "" || reviewRating === 0) {
      alert("Plz enter all the data")
    } else {
        setCurretDate(currentDate);
      await addReview({title: localValue,description: reviewDescription,rating: reviewRating});
      setState(!state)
      alert("Review added successfully..!")
    }
    setReviewDescription("")
    setReviewRating(0)
    setReviewTitle("")
  }

  const handleClick = () => {
    if (localValue.length > 5) {
      setState(true)
    } else {
      alert("You don't have logged in. Log in first");
      router.push('/login');
    }
  }

  const lengthData = reviewData.length
  let addition = 0
  const totalAddition = reviewData.map((v) => {
    return addition = v.rating + addition
  })
  const finalRating = lengthData === 0 ? 0 : (addition / lengthData).toFixed(1)

  const returnFun = () => {
    switch (value) {
      case 1: return <Custmize />
      case 2: return <WhyUs />
      case 3: return <Contact />
      case 4:
        return (
          <>
            <div className='reviews-main'>
              <div className={`review-black ${state ? 'review-black-after' : ''}`} />
              <div className={`give-review-modal ${state ? 'give-review-modal-after' : ''}`}>
                <div className='review-top-title'>
                  <h3>Give your review</h3>
                  <button onClick={() => setState(!state)} className='cancle-btn'>Cancel</button>
                </div>
                <div className='review-bottom-div'>
                  <div className='review-input-second'>
                    <label>Review Description</label>
                    <textarea value={reviewDescription} onChange={(e) => setReviewDescription(e.target.value)} />
                  </div>
                  <div className='review-input-third'>
                    <label className='give-review-title'>Give Rating between 0-5</label>
                    <div className='review-input-third-bottom'>
                      {[1, 2, 3, 4, 5].map(num => (
                        <div className='rating-inner-div1' key={num}>
                          <input type="radio" name="rating" onChange={() => setReviewRating(num)} />
                          <label>{num}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button className='submit-btn' onClick={addReviewToDatabase}>Submit</button>
              </div>

              <div className='reviews-left'>
                <div className='revies-left-inner'>
                  <h3 className='cust-rate'>Customers ratings</h3>
                  <p className='based-on'>Based on average of all ratings</p>
                  <div className='star-rating-div'>
                    <h2>{finalRating}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e2b618">
                      <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                    </svg>
                  </div>
                  <button className='give-review' onClick={handleClick}>Give Review</button>
                </div>
              </div>

              <div className='reviews-right'>
                <div className='reviews-right-top'>
                  <h3>Trip Reviews</h3>
                </div>
                <div className='reviews-right-bottom'>
                  {loading ? (
                    <p>Loading reviews...</p>
                  ) : error ? (
                    <p>No Reviews Found</p>
                  ) : (
                    reviewData.map((v, i) => (
                      <div className='review-frame' key={i}>
                        <div className='frame-top-img'>
                          <div className='review-img'>
                            <img src={person.src} alt='' className='user' />
                          </div>
                          <div className='frame-top-second-div'>
                            <h2>{v.title}</h2>
                            <div className='frame-top-second-div-inner'>
                              <p className='inner-stars'>
                                {v.rating}
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e2b618">
                                  <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                </svg>
                              </p>
                              <p className='inner-dates'>{v.timestamp}</p>
                            </div>
                          </div>
                        </div>
                        <div><p>{v.description}</p></div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className='navbar-main'>
        <div className='navbar-img-div'>
          <img src={logo} alt="" className='cust-logo' />
        </div>
        <ul className='navbar-ul-div'>
          <li className={`sanketx ${value == 1 ? 'firstclass' : ''}`} onClick={() => setValue(1)}>Customize</li>
          <li className={`sanketx ${value == 2 ? 'secondclass' : ''}`} onClick={() => setValue(2)}>Features</li>
          <li className={`sanketx ${value == 3 ? 'thirdclass' : ''}`} onClick={() => setValue(3)}>Contact</li>
          <li className={`sanketx ${value == 4 ? 'fourthclass' : ''}`} onClick={() => setValue(4)}>Reviews</li>
        </ul>
      </div>
      {returnFun()}
      <Footer />
    </>
  )
}
