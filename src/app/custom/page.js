"use client";
import React, { useState } from "react";
import Footer from "../components/footer";
import {addTripToData} from '../../actions/trips.action'
export default function Custom() {
  const [count, setCount] = useState(1);

  // Store all inputs in a single state object
  const [tripData, setTripData] = useState({
    destination: "",
    adult: 0,
    child: 0,
    startDate: "",
    endDate: "",
    accommodation: "",
    activities: [],
  });

  const addTriptoDB = async() => {
    alert("trip booked successfully");
    console.log("Add trip Function Calls");
    const result = await addTripToData({dest:tripData.destination, adultNo:tripData.adult, childNo:tripData.child, startDateNo:tripData.startDate, endDateNO:tripData.endDate, accommodationNO:tripData.accommodation} )
    console.log(result);
    
    
}


  const handleChange = async(e) => {

    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setTripData((prev) => ({
        ...prev, activities: checked ? [...prev.activities, value]: prev.activities.filter((activity) => activity !== value),
      }));
    } else {
      setTripData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  const fillInput1=()=>{                   // case 1
    if(tripData.destination!='' ){ 
      setCount(count + 1)
      
    }else{
      alert('plz fill destination')
    }
  }


  const fillInput2=()=>{                               // case 2
    if(tripData.adult!='' || tripData.child!='' ){
      setCount(count + 1)
      
    }else{
      alert('plz Add members ')
    }
  }

  const fillInput3=()=>{                                       // case 3
    if(tripData.startDate!='' && tripData.endDate!=='' ){
      setCount(count + 1)
      
    }else{
      alert('Plz select dates')
    }
  }


  const fillInput4=()=>{                                // case 4
    if(tripData.accommodation!='' ){
      setCount(count + 1)
      
    }else{
      alert('plz select  accomodation')
    }
  }

  const fillInput5=()=>{
    if(tripData.activities!='' ){
      setCount(count + 1)
      
    }
    else{
      alert('plz select activities')
    }
  }
  const fillInput6=()=>{

  }
const fill=()=>{
  if(tripData.endDate <tripData.startDate){
    alert("You can't select end date less than start date")
    
  }else{
      
  }
}

  const switchCustom = () => {
    switch (count) {
      case 1:
        return (
          <div className="where-main">
            <p>Where do you want to go..?</p>
            <input
              type="text"
              placeholder="Enter here"
              name="destination"
              value={tripData.destination}
              onChange={handleChange}
            />

            <div className="custom-btn-div">
              <button className="pre-btn" disabled={count <= 1} onClick={() => setCount(count - 1)}>
                Previous
              </button>
              <button className="next-btn" disabled={count > 5} onClick={fillInput1 }>
              Next
              </button>
            </div>

          </div>
        );

      case 2:
        return (
          <div className="people-main">
            <h4 className="how-many">How many travellers..?</h4>

            <div className="people-main-inner">
              <div className="adult-div">
                <label>Adult</label>
                <div className="min-max-div">
                  <button
                    className="min-btn"
                    onClick={() =>
                      setTripData((prev) => ({
                        ...prev,
                        adult: Math.max(0, prev.adult - 1),
                      }))
                    }
                  >
                    -
                  </button>
                  <h5 className="count">{tripData.adult}</h5>
                  <button
                    className="max-btn"
                    onClick={() =>
                      setTripData((prev) => ({
                        ...prev,
                        adult: prev.adult + 1,
                      }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="child-div">
                <label>Children</label>
                <div className="min-max-div">
                  <button
                    className="min-btn"
                    onClick={() =>
                      setTripData((prev) => ({
                        ...prev,
                        child: Math.max(0, prev.child - 1),
                      }))
                    }
                  >
                    -
                  </button>
                  <h5 className="count">{tripData.child}</h5>
                  <button
                    className="max-btn"
                    onClick={() =>
                      setTripData((prev) => ({
                        ...prev,
                        child: prev.child + 1,
                      }))
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
             <div className="custom-btn-div">
              <button className="pre-btn" disabled={count <= 1} onClick={() => setCount(count - 1)}>
                Previous
              </button>
              <button className="next-btn" disabled={count > 5} onClick={fillInput2 }>
                Next
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="calender-main">
            <h4>When do you want to travel..?</h4>
            <div className="calender-input">
              <div className="start-div">
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={tripData.startDate}
                  onChange={handleChange}
                />
              </div>

              <div className="end-div">
                <label>End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={tripData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="custom-btn-div">
              <button className="pre-btn" disabled={count <= 1} onClick={() => setCount(count - 1)}>
                Previous
              </button>
              <button className="next-btn" disabled={count > 5} onClick={()=>{fillInput3(); fill()}}>
                Next
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="hotel-main">
            <h4 className="which-type">Which type of accommodation do you prefer..?</h4>
            {["Hotel", "Apartment", "Resort", "Villa"].map((type) => (
              <div key={type} className={`${type.toLowerCase()}-div`}>
                <input
                  type="radio"
                  name="accommodation"
                  value={type}
                  checked={tripData.accommodation === type}
                  onChange={handleChange}
                />
                <label>{type}</label>
              </div>
            ))}
           <div className="custom-btn-div">
              <button className="pre-btn" disabled={count <= 1} onClick={() => setCount(count - 1)}>
                Previous
              </button>
              <button className="next-btn" disabled={count > 5} onClick={fillInput4 }>
             Next
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="activity-main">
            <h4 className="which-activity">Which activities are you interested in..?</h4>
            {["Sightseeing", "Food", "Adventure", "Relaxation"].map((activity) => (
              <div key={activity} className="checkbox-main">
                <input
                  type="checkbox"
                  name="activities"
                  value={activity}
                  checked={tripData.activities.includes(activity)}
                  onChange={handleChange}
                />
                <label>{activity}</label>
              </div>
            ))}
             <div className="custom-btn-div">
              <button className="pre-btn" disabled={count <= 1} onClick={() => setCount(count - 1)}>
                Previous
              </button>
              
              <button className="next-btn" disabled={count > 5} onClick={()=>{fillInput5(); }}>
                {count === 6 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="summary-main">
            <h4 className="trip-summary">Trip Summary</h4>
            <div>
              <h6>Destination: {tripData.destination}</h6>
              <h6>Dates: {tripData.startDate} - {tripData.endDate}</h6>
              <h6>{tripData.adult} Adults, {tripData.child} Children</h6>
              <h6>Accommodation: {tripData.accommodation}</h6>
              <h6>Activities: {tripData.activities.join(", ")}</h6>
            </div>
            <div className="custom-btn-div">
              <button className="pre-btn" disabled={count <= 1} onClick={() => setCount(count - 1)}>
                Previous
              </button>
              <button className="next-btn"  onClick={()=>addTriptoDB()} >
                Submit
              </button>
            </div>  
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="custom-main">
   
      <div className="custom-inner">
        <div className="custom-heading">
          <h5>Customize Your Dream Trip {count}</h5>
          <p>Follow the steps below to plan your perfect getaway</p>
        </div>
        <div className='custom-lower'>
                 <div className='custom-img-div'>
                     <div className='custom-img'><svg className="svg-cust" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg></div>
                     <div className='custom-img'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg></div>                     <div className='custom-img'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg></div>
                  <div className='custom-img'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm240 40h320v-160q0-33-23.5-56.5T760-640H520v240ZM280-520q17 0 28.5-11.5T320-560q0-17-11.5-28.5T280-600q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-40Zm240-80v240-240Z"/></svg></div>
                   <div className='custom-img'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M180-520q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17ZM120-80v-200H80v-160q0-17 11.5-28.5T120-480h120q17 0 28.5 11.5T280-440v160h-40v120h320v-200h-70q-71 0-120.5-49.5T320-530q0-53 28.5-94.5T422-686q11-65 60.5-109.5T600-840q68 0 117.5 44.5T778-686q45 20 73.5 61.5T880-530q0 71-49.5 120.5T710-360h-70v200h200v80H120Zm370-360h220q38 0 64-26t26-64q0-27-14.5-49T746-612l-42-18-6-44q-6-37-33.5-61.5T600-760q-37 0-64.5 24.5T502-674l-6 44-42 18q-25 11-39.5 33T400-530q0 38 26 64t64 26Zm110-160Z"/></svg></div>
                   <div className='custom-img'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0 160q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm0-560v160-160 560-560Z"/></svg></div> 
                </div>

                <div className='custom-line'>
                     <div  className={`custom-line-inner ${count==2?'custom-line-inner-40':count==3?'custom-line-inner-60':count==4?'custom-line-inner-80':count==5?'custom-line-inner-100':count==6?'custom-line-inner-120':''}`} ></div>
                 </div>
        </div>
        {switchCustom()}

        
      </div>
      
      <Footer/>
    </div>
  );
}
