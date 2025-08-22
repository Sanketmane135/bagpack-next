"use client";
import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import { getPackTrip } from '../../actions/pack.action';
import trip1 from '../photos/trip.jpg';

import Image from 'next/image';

export default function Dashboard() {
  const [storeData, setStoreData] = useState([]);
  const [findMail, setMail] = useState('');
  const [loading, setLoading] = useState(true); // new

  useEffect(() => {
    const email = window.localStorage.getItem("mailsign") || '';
    
    
    setMail(email);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      console.log(findMail);
      try {
        if (findMail) {
          const data = await getPackTrip(findMail);
          
          setStoreData(data);
          console.log("data fetched", data);
          
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
        setStoreData([]);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [findMail]);

  return (
    <div className='dashboard-main'>
      <div className='dashboard-bottom'>
        <h4 className='your-booked'>Your Booked Trips</h4>

        <div className='booked-status-frames'>
        
        
        {loading ? (
  <div className='trip-loading-main'>
    <div className="trip-loading-main">

  {[...Array(5)].map((_, index) => (
    <div key={index} className="trip-card skeleton">
      <div className="dash-trip-first">
        <div className="dash-trip-title">
          <div className="skeleton-line short" />
          <div className="skeleton-line tiny" />
        </div>
        <div className="skeleton-line small" />
      </div>

      <div className="dash-trip-dates">
        <div className="dates-inner-dash">
          <div className="dates-inner-dash-inner">
            <div className="skeleton-icon" />
            <div className="skeleton-line tiny" />
          </div>
          <div className="skeleton-line medium" />
        </div>

        <div className="dash-trip-acco-div">
          <div className="dates-inner-dash-inner">
            <div className="skeleton-icon" />
            <div className="skeleton-line tiny" />
          </div>
          <div className="skeleton-line medium" />
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
) : (
  <div className='trip-loading-main'>
    {Array.isArray(storeData) && storeData.length > 0 ? (
      storeData.map((trip, index) => (
        <div key={index} className="trip-card">
          <div className='dash-trip-first'>
            <div className='dash-trip-title'>
              <h3 className='dash-dest'>{trip.packName}</h3>
              <p>Trip-Id : Maha-123455</p>
            </div>
            <div className='dash-trip-status'>{trip.status}</div>
          </div>
          
          <div className='dash-trip-dates'>
            <div className='dates-inner-dash'>
              <div className='dates-inner-dash-inner'>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M216-96q-29.7 0-50.85-21.5Q144-139 144-168v-528q0-29 21.15-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29.7 0 50.85 21.5Q816-725 816-696v528q0 29-21.15 50.5T744-96H216Zm0-72h528v-360H216v360Zm0-432h528v-96H216v96Zm0 0v-96 96Zm264.21 216q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 144q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm-156 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Zm312 0q-15.21 0-25.71-10.29t-10.5-25.5q0-15.21 10.29-25.71t25.5-10.5q15.21 0 25.71 10.29t10.5 25.5q0 15.21-10.29 25.71t-25.5 10.5Z"/></svg>
                <h4 className='dash-dates-inner'>Travel Dates</h4> 
              </div>
              <p className='dash-dates-main'>{trip.starDate} to {trip.endDate}</p>
              
            </div>

            <div className='dash-trip-acco-div'> 
              <div className='dates-inner-dash-inner'> 
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z"/></svg>
                <h4>Accomodation</h4>
              </div>
              <p className='dash-dates-main'>{trip.acco}</p>
             
            </div>
          </div>
          
        </div>
      ))
    ) : (
      <p className='trip-loading'>No trips found...</p>
    )}
  </div>
)}

        </div>
      </div>
      <Footer />
    </div>
  );
}
