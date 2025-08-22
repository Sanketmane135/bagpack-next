'use client';
import React, { use } from 'react';

import { useRouter } from 'next/navigation';

function page() {

    const router = useRouter();
  return (
    <div className='booked-main'>
         <div class="bg-element">✈️</div>
    <div class="bg-element">🏔️</div>
    <div class="bg-element">🏖️</div>
    <div class="bg-element">🗺️</div>

    <div class="confirmation-container">
        <div class="success-icon">
            <div class="checkmark">✓</div>
        </div>

        <h1 class="title">Custome Booking Request Submitted!</h1>
        <p class="subtitle">Stay in touch Our TEAM will contact you soon..</p>
        
        <p class="message">
            Your custom trip booking request has been successfully submitted. Our travel experts will review your requirements and get back to you within 24 hours with a personalized itinerary and quote.
        </p>

        <div class="details-box">
            <div class="details-title">
                <span>📋</span>
                What happens next?
            </div>
            <ul class="details-list">
                <li>Our team will review your custom trip requirements</li>
                <li>We'll prepare a detailed itinerary based on your preferences</li>
                <li>You'll receive a personalized quote within 24 hours</li>
                <li>Our travel consultant will contact you to discuss details</li>
                <li>Once confirmed, we'll handle all your booking arrangements</li>
            </ul>
        </div>

        <div class="buttons">
       
            <button class="btn btn-primary" onClick={() => router.push('/')}>Back to Home</button>
          
        </div>

        <div class="contact-info">
            <p><strong>Need immediate assistance?</strong></p>
            <p>Call us at: <strong>+91 9359708620</strong></p>
            <p>Email: <strong>sanketmane0407@gmail.com</strong></p>
            
        </div>
    </div>
    </div>
  )
}

export default page