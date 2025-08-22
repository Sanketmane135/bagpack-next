
"use client";
import React, { useEffect, useState } from "react";
import logo from "../photos/logo.png";
import {addUserData} from "../../actions/user.action"
import { getUser } from "../../actions/user.action";
import {  useRouter } from 'next/navigation';


export default function Login() {



  //  useEffect(()=>{
  //         const getUserData = async () => {
  //             const data = await getUser()
  //             setLoginData(data)
  //             console.log(data);
  //         }
  //         getUserData()
  //     },[])

  let [stepcount, setStepcount] = useState(0);
  const [loginData, setLoginData] = useState([]);

  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailsign, setEmailSign] = useState("");
  const [passwordSign, setPasswordSign] = useState("");
  const [existNo, setexistNO] = useState(false);
  const [logYes, setLogYes]=useState(false);
  const[userStatus, setUserStatus] = useState("Active");



  const addUserToDatabase = async() => {
    console.log("Add user Function Calls");
   console.log("typeof userStatus:", typeof userStatus); 
    const result = await addUserData({firstName:firstName, lastName:lastName, email:email, password:password, status:userStatus} )
    window.localStorage.setItem("email",email);
    console.log(formData.email);
}


  // Function to handle form submission and validation
  const handleFormSubmit =async () => {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const termsChecked = document.getElementById("termsCheckbox").checked;
    // window.localStorage.setItem("hi","kuyfgeo");
    // Validation checks
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
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
     
      password,
      confirmPassword,
    });

    console.log("Stored Data:", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    // Move to the next step

    
    setStepcount(1);
  };

  const router = useRouter();

  const loginmanage = async () => {
    const info = await getUser({ email: emailsign, password:passwordSign  });
  
    if (info?.email === emailsign) {
      setexistNO(!existNo);
      setLogYes(true);
  
      setTimeout(() => {
        router.push('/');
      }, 500);
  
      window.localStorage.setItem("mailsign", emailsign);
      console.log("Email saved to localStorage:", emailsign);
    } else {
      alert("Password or gmail is incorrect");
    }
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
          <input
            type="email"
            id="email"
            value={emailsign}
            onChange={(e) => setEmailSign(e.target.value)}
          />
        </div>

        <div className="sign-in-password">
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={passwordSign}
            onChange={(e) => setPasswordSign(e.target.value)}
          />
        </div>

        <button className="forgot-btn">Forgot Password?</button>

        <button className="signin-btn" onClick={loginmanage}>
        {logYes ? "Loading..." : "Sign In"}
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

      {/* <div>
        <button>Log in as Admin</button>
      </div> */}
    </div>
  );


  
}




