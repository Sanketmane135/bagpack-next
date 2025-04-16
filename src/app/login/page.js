
"use client";
import React, { useEffect, useState } from "react";
import logo from "../photos/logo.png";
import {addUserData} from "../../actions/user.action"
import { getUser } from "../../actions/user.action";

export default function Login() {



   useEffect(()=>{
          const getUserData = async () => {
              const data = await getUser()
              setLoginData(data)
              console.log(data);
          }
          getUserData()
      },[])

  let [stepcount, setStepcount] = useState(0);
  const [loginData, setLoginData] = useState([]);

  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(0)
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")



  const addUserToDatabase = async() => {
    console.log("Add user Function Calls");
    const result = await addUserData({firstName:firstName, lastName:lastName, email:email, otp:otp, password:password} )
    
}


  // Function to handle form submission and validation
  const handleFormSubmit = () => {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const otp = document.getElementById("otp").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const termsChecked = document.getElementById("termsCheckbox").checked;
    // window.localStorage.setItem("hi","kuyfgeo");
    // Validation checks
    if (!firstName || !lastName || !email || !otp || !password || !confirmPassword) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!termsChecked) {
      alert("You must agree to the Terms of Services and Privacy Policy.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Store data in state
    setFormData({
      firstName,
      lastName,
      email,
      otp,
      password,
      confirmPassword,
    });

    console.log("Stored Data:", {
      firstName,
      lastName,
      email,
      otp,
      password,
      confirmPassword,
    });

    // Move to the next step
    setStepcount(1);
  };

  const loginmanage = () => {
   
  };

  const logfun = (stepcount) => {
    switch (stepcount) {
      case 0:
        return (
          <>
            <div className="login-right-top">
              <h5>Create an account</h5>
              <p>Start your journey with us today</p>
            </div>

            <div className="login-right-bottom">
              <div className="first-last-name">
                <div className="first-name">
                  <label>First name</label>
                  <input type="text" id="firstName" onChange={(e)=>setFirstName(e.target.value)} />
                </div>

                <div className="first-name">
                  <label>Last name</label>
                  <input type="text" id="lastName" onChange={(e)=>setLastName(e.target.value)} />
                </div>
              </div>

              <div className="login-email-div">
                <label>Email</label>
                <div className="email-inner">
                  <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                  <button className="send-otp">Send OTP</button>
                </div>
              </div>

              <div className="otp-main">
                <label>OTP</label>
                <div className="otp-inner">
                  <input type="number" id="otp" onChange={(e)=>setOtp(e.target.value)} />
                  <button className="verify">Verify</button>
                </div>
              </div>

              <div className="password-main">
                <label>Password</label>
                <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
              </div>

              <div className="confirm-main">
                <label>Confirm Password</label>
                <input type="password" id="confirmPassword" onChange={(e)=>setRePassword(e.target.value)} />
              </div>

              <div className="terms-check">
                <input type="checkbox" id="termsCheckbox" />
                <p>I agree to the Terms of Services and Privacy Policy</p>
              </div>

              <button className="create-account" onClick={()=>{handleFormSubmit(); addUserToDatabase()}}>
                Create Account
              </button>

              <p className="or-p"> OR SIGN UP WITH</p>

              <div className="already-div">
                <p>Already have an account?</p>
                <button
                  onClick={() => {
                    setStepcount(1);
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="sign-in-top">
              <h4>Welcome back</h4>
              <p>Please enter your details to sign in</p>
            </div>

            <div className="sign-in-bottom">
              <div className="sign-in-email">
                <label>Email</label>
                <input type="email" id="email"  />
              </div>

              <div className="sign-in-password">
                <label>Password</label>
                <input type="password" id="password"  />
              </div>

              <button className="forgot-btn">Forgot Password?</button>

              <button className="signin-btn" onClick={loginmanage}>
                Sign In
              </button>

            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={logo.src} className="login-png" />
        <h4 className="join">Join Our Community</h4>
        <p className="create">
          Create an account to discover amazing destinations, save your favorite
          trips, and get exclusive travel deals.
        </p>
      </div>

      <div className="login-right">{logfun(stepcount)}</div>
    </div>
  );


  
}




