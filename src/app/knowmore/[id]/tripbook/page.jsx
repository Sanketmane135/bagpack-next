
"use client";
import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {addPackData} from '../../../../actions/pack.action'
import Footer from '../../../components/footer';
import { usePathname } from "next/navigation";
import axios from 'axios';


export default function Book() {
  const [formData, setFormData] = useState({
    packageName: 'Goa',
    adults: 1,
    children: 0,
    fullName: '',
    phoneNumber: null,
    startDate: '',
    accommodation: 'bungalow',
    email: '',
    activities: ''
  });


  const [packStatus , setPackStatus]=useState("Pending Aproval");

  const [pack,setPack]=useState('');

  const router = useRouter();
  const pathname = usePathname(); 
  const currentId = pathname.split('/')[2];
  console.log(`the trip id is ${currentId}`);

    const [packages, setPackages] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!currentId) return;

    const fetchPackage = async () => {
      try {
        const res = await axios.get(
          `https://bagpackbackendweb.onrender.com/api/bagpack/builtpackages/${currentId}`
        );

        if (!res.data.tripPack) {
          setNotFound(true);
        } else {
          setPackages(res.data.tripPack);
          setPack(res.data.tripPack.tripName);
          setNotFound(false);
        }
      } catch (err) {
        console.error("Error fetching package:", err);
        setNotFound(true);
      }
    };

    fetchPackage();
    
  }, [currentId]);

  useEffect(() => {
    console.log("Package data fetched:", packages);
  }, [packages]);

   useEffect(() => {
      // Dynamically set amount based on currentId
      if (currentId == 0) {
        setPack("Goa");
      } else if (currentId ==1) {
        setPack("Kerala");
      }else if(currentId == 2){
        setPack("Maharashtra");
      }else if(currentId == 3){
        setPack("Rajasthan");
      } else if(currentId == 4){
        setPack("NorthEast");
      }else if(currentId == 5){
        setPack("Kashmir");
      }else if(currentId == 6){
        setPack("HimachalPradesh");
      }else if(currentId ==7){
        setPack("Andaman");
      }else if(currentId == 8){
        setPack("Gujarat");
      }
      else {
        setPack("Loading..."); 
      }
    }, [currentId]);




    
  
  const handleSubmit2 = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
  
    const {packageName, adults, children, fullName, phoneNumber,startDate, accommodation, email} = formData;
  
    // Validate required fields
    // Ensure that all required fields are filled in before proceeding
    if (!packageName || !fullName || !phoneNumber || !startDate|| !accommodation || !email) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Validate phone number format
    // Ensure that the phone number is exactly 10 digits long
    if (phoneNumber.length !== 10) {
      alert("Phone number should be exactly 10 digits.");
      return;
    }
  
    console.log("Add user Function Called");
  
    try {
      // const result = await addPackData({
      //   packName: pack,
      //   adultsId: adults,
      //   childId: children,
      //   name: fullName,
      //   phoneNO: phoneNumber,
      //   starDate: startDate,
      //   acco: accommodation,
      //   emailId: email,
      //   status: packStatus
      // });
      
       const res = await axios.post("https://bagpackbackendweb.onrender.com/api/bagpack/addpackage", {
          packName: formData.packageName,
          adultsId: formData.adults,
          childId: formData.children,
          name: formData.fullName,
          phoneNO: formData.phoneNumber,
          starDate: formData.startDate,
          acco: formData.accommodation,
          emailId: formData.email,
          status: "pending approval"
       });
      console.log("Success:", res.data);
      router.push(`/knowmore/${packages._id}/tripbook/payment?children=${children}&adults=${adults}&packpid=${packages._id}`);
    } catch (error) {
      console.error("Failed to add package data:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === 'adults' || name === 'children') && Number(value) < 0) {
      alert("Number of travelers cannot be less than 0");
      return;
    }

   
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 

  return (
    <>
      <div className="book-div">
        <div className="book-div-inner">
          <div className="book-heading-div">
            <h5>Book Your Trip</h5>
            <p>Fill in the details to plan your perfect getaway .</p>
          </div>

          <div className="book-input-div">
            <div className="book-input-left">
              {/* Package Name */}
              <div className="book-destination">
                <label>Package Name</label>
                {/* <select name="packageName" value={formData.packageName} onChange={handleChange}>
                  {["Goa", "Kerala", "Maharashtra", "Rajasthan", "NorthEast", "Kashmir", "HimachalPradesh", "Gujarat"].map((place) => (
                    <option key={place} value={place}>{place}</option>
                  ))}
                </select> */}
                <input type='text' value={pack} />
              </div>

              {/* Number of Travelers */}
              <div className="book-no-travellers">
                <label className="book-no-travel-label">Number of Travelers</label>
                <div className="book-no-travelers-inner">
                  <div className='book-div-persons'>
                    <label>No of Adults</label>
                    <input type="number" className='adult-input-book' name="adults" value={formData.adults} onChange={handleChange} />
                  </div>
                  <div className='book-div-persons'>
                    <label>No of Children</label>
                    <input type="number"  className='adult-input-book' name="children" value={formData.children} onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div className="book-full-name">
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>

              {/* Phone Number - Fixed */}
              <div className="book-phoneno">
                <label>Phone Number</label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="book-input-right">
              {/* Travel Dates */}
              <div className="book-dates">
                <label className="travel-dates">Travel Dates</label>
                <div className="book-dates-inner">
                  <div className="book-start-date">
                    <label>Start Date</label>
                    <input type="date" name="startDate" className="book-start" value={formData.startDate} onChange={handleChange} required />
                  </div>
                  
                </div>
              </div>

              {/* Accommodation */}
              <div className="book-accommodation">
                <label>Accommodation Type</label>
                <select name="accommodation" value={formData.accommodation} onChange={handleChange}>
                  {["bunglow", "villa", "room", "hotel"].map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Email */}
              <div className="book-email">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              {/* Activities */}
              <div className="book-activities">
                <label>Any Note</label>
                <input
                  type="text"
                  name="activities"
                  placeholder="e.g., Prefering the non-veg food"
                  value={formData.activities}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Proceed to Payment */}
          <button className="book-btn" onClick={handleSubmit2}>
  Proceed to Payment
</button>

        </div>
      </div>

      <Footer/>
    </>
  );
}
