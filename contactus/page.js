"use client";
import React, { useState } from 'react';
import { usePathname } from "next/navigation";


import Footer from '../components/footer';


export default function ContactUs() {

const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = () => {
    if(formData.email=="" || formData.message=="" || formData.name=="" || formData.subject==""){
      alert("Please...Fill all the input fields")
    }else{
     
      console.log('Form Data:', formData);
      alert(`Your Response submitted successfully..!
        By: ${formData.name}
        `)
    }

    // You can now send this object to a backend API or store it
  };

  return (
    <> 
      <div className='contact-us-main'>
        <div className='contact-upper'>
          <h2 className='h2-contact'>Contact Us</h2>

          <div className='address-main'>
            <div className='address-inner'>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000">
                <path d="M480-284.33q105.67-82 159.5-164.34Q693.33-531 693.33-598q0-94.67-59.66-155Q574-813.33 480-813.33q-94 0-153.67 60.33-59.66 60.33-59.66 155 0 66.33 53.83 148.67 53.83 82.33 159.5 165Zm0 84.33Q338.33-303.33 269.17-404.67 200-506 200-598q0-123.67 78.33-202.83Q356.67-880 480-880q123.33 0 201.67 79.17Q760-721.67 760-598q0 92-69.17 193.33Q621.67-303.33 480-200Zm-.67-320q33.67 0 57.17-23.5T560-600q0-33-23.5-56.5T479.33-680q-33 0-56.16 23.5Q400-633 400-600t23.17 56.5q23.16 23.5 56.16 23.5ZM200-80v-66.67h560V-80H200Zm280-520Z"/>
              </svg>
              <h4>Address</h4>
            </div>
            <p>123 Laxmi Plaza, Cyber Chouk Kolhapur, CA 94107</p>
          </div>

          <div className='email-main'>
            <div className='Email-inner'>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000">
                <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z"/>
              </svg>
              <h4>Mail Us</h4>
            </div>
            <p>sanketmane0407@gmail.com</p>
          </div>

          <div className='call-main'>
            <div className='call-inner'>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000">
                <path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z"/>
              </svg>
              <h4>Call Us</h4>
            </div>
            <p>+91 935970xxxx</p>
          </div>
        </div>

        <div className='contact-lower'>
          <div className='name-div'>
            <label>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} className='name-input' placeholder='Your name'/>
          </div>

          <div className='email-div'>
            <label>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} className='email-input' placeholder='Your email'/>
          </div>

          <div className='subject-div'>
            <label>Subject</label>
            <input type='text' name='subject' value={formData.subject} onChange={handleChange} className='subject-input' placeholder='What is this regarding..?'/>
          </div>

          <div className='message-div'>
            <label>Message</label>
            <textarea name='message' value={formData.message} onChange={handleChange} className='message-input' placeholder='Tell us how we can help you...'/>
          </div>

          <button className='contact-submit-btn' onClick={handleSubmit}>Submit</button>
        </div>

      </div>

    </>
  );
}
