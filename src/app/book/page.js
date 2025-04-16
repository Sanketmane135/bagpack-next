// "use client";
// import React, { useState } from 'react';
// import Footer from '../components/footer';
// import Link from 'next/link';
// export default function Book() {
//   const [formData, setFormData] = useState({
//     packageName: 'Goa',
//     adults: 1,
//     children: 0,
//     fullName: '',
//     phoneNumber: '',
//     startDate: '',
//     endDate: '',
//     accommodation: 'bungalow',
//     email: '',
//     activities: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if ((name === 'adults' || name === 'children') && Number(value) < 0) {
//       alert("Number of travelers cannot be less than 0");
//       return;
//     }

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handlePhoneChange = (value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       phoneNumber: value,
//     }));
//   };

//   const handleSubmit = () => {
//     if (!formData.fullName || !formData.email || !formData.phoneNumber) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     if (new Date(formData.endDate) < new Date(formData.startDate)) {
//       alert("End date cannot be earlier than start date.");
//       return;
//     }
//     console.log("Form Submitted", formData);
//     alert("Booking Successful!");
//   };

//   return (
//     <>
   
//     <div className="book-div">
//       <div className="book-div-inner">
//         <div className="book-heading-div">
//           <h5>Book Your Trip</h5>
//           <p>Fill in the details to plan your perfect getaway.</p>
//         </div>

//         <div className="book-input-div">
    
//           <div className="book-input-left">
           
//             <div className="book-destination">
//               <label>Package Name</label>
//               <select name="packageName" value={formData.packageName} onChange={handleChange}>
//                 {["Goa", "Kerala", "Maharashtra", "Rajasthan", "North East", "Kashmir", "Himachal Pradesh", "Gujarat"].map((place) => (
//                   <option key={place} value={place}>{place}</option>
//                 ))}
//               </select>
//             </div>
                
           
//             <div className="book-no-travellers">
//               <label className="book-no-travel-label">Number of Travelers</label>
//               <div className="book-no-travelers-inner">
//                 <div>
//                   <label>No of Adults</label>
//                   <input type="number" name="adults" value={formData.adults} onChange={handleChange} />
//                 </div>
//                 <div>
//                   <label>No of Children</label>
//                   <input type="number" name="children" value={formData.children} onChange={handleChange} />
//                 </div>
//               </div>
//             </div>     
//             <div className="book-full-name">
//               <label>Full Name</label>
//               <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//             </div>

           
//             <div className="book-phoneno">
//               <label>Phone Number</label>
//               <input type='number'   name="phoneNumber"  value={formData.phoneNumber} onChange={handlePhoneChange} />
//             </div>
//           </div>

       
//           <div className="book-input-right">
         
//             <div className="book-dates">
//               <label className="travel-dates">Travel Dates</label>
//               <div className="book-dates-inner">
//                 <div className="book-start-date">
//                   <label>Start Date</label>
//                   <input type="date" name="startDate" className='book-start' value={formData.startDate} onChange={handleChange} required />
//                 </div>
//                 <div className="book-end-date">
//                   <label>End Date</label>
//                   <input type="date" name="endDate" className='book-start' value={formData.endDate} onChange={handleChange} required />
//                 </div>
//               </div>
//             </div>

       
//             <div className="book-accommodation">
//               <label>Accommodation Type</label>
//               <select name="accommodation" value={formData.accommodation} onChange={handleChange}>
//                 {["bungalow", "villa", "room", "hotel"].map((type) => (
//                   <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
//                 ))}
//               </select>
//             </div>

          
//             <div className="book-email">
//               <label>Email</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//             </div>

           
//             <div className="book-activities">
//               <label>Preferred Activities</label>
//               <input type="text" name="activities" placeholder="e.g., sightseeing, beach, hiking" value={formData.activities} onChange={handleChange} />
//             </div>
//           </div>
//         </div>
//         <Link href={`/book/payment/${formData.packageName}`}><button className="book-btn" onClick={handleSubmit}>Proceed to Payment</button></Link>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }
"use client";
import React, { useState } from 'react';
import Footer from '../components/footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {addPackData} from '../../actions/pack.action'

export default function Book() {
  const [formData, setFormData] = useState({
    packageName: 'Goa',
    adults: 1,
    children: 0,
    fullName: '',
    phoneNumber: 0,
    startDate: '',
    endDate: '',
    accommodation: 'bungalow',
    email: '',
    activities: ''
  });
  const router = useRouter();

  const handleSubmit2 = async (e) => {
    e.preventDefault(); // Prevent default navigation
  
    const {
      packageName, adults, children, fullName, phoneNumber,
      startDate, endDate, accommodation, email
    } = formData;
  
    if (
      !packageName || !fullName || !phoneNumber || !startDate ||
      !endDate || !accommodation || !email
    ) {
      alert("Please fill in all required fields.");
      return;
    }
  
    if (new Date(endDate) < new Date(startDate)) {
      alert("End date cannot be earlier than start date.");
      return;
    }


  console.log("Add user Function Calls");
  const result = await addPackData({packName:formData.packageName,adultsId:formData.adults,childId:formData.children,name:formData.fullName, phoneNO:formData.phoneNumber, starDate:formData.startDate ,endDate:formData.endDate,acco:formData.accommodation, emailId:formData.email } )
    
    
    // Optional: send to backend here
    // await addTrip(formData);
  
    // Navigate only after validation
    router.push(`/book/payment/${packageName}`);
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

  const handleSubmit = async() => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      alert("Please fill in all required fields.");
      return;
    }
    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      alert("End date cannot be earlier than start date.");
      return;
    }
    console.log("Form Submitted", formData);

    

   
  };

  return (
    <>
      <div className="book-div">
        <div className="book-div-inner">
          <div className="book-heading-div">
            <h5>Book Your Trip</h5>
            <p>Fill in the details to plan your perfect getaway.</p>
          </div>

          <div className="book-input-div">
            <div className="book-input-left">
              {/* Package Name */}
              <div className="book-destination">
                <label>Package Name</label>
                <select name="packageName" value={formData.packageName} onChange={handleChange}>
                  {["Goa", "Kerala", "Maharashtra", "Rajasthan", "NorthEast", "Kashmir", "HimachalPradesh", "Gujarat"].map((place) => (
                    <option key={place} value={place}>{place}</option>
                  ))}
                </select>
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
                  <div className="book-end-date">
                    <label>End Date</label>
                    <input type="date" name="endDate" className="book-start" value={formData.endDate} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              {/* Accommodation */}
              <div className="book-accommodation">
                <label>Accommodation Type</label>
                <select name="accommodation" value={formData.accommodation} onChange={handleChange}>
                  {["bungalow", "villa", "room", "hotel"].map((type) => (
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
                <label>Preferred Activities</label>
                <input
                  type="text"
                  name="activities"
                  placeholder="e.g., sightseeing, beach, hiking"
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

      <Footer />
    </>
  );
}
