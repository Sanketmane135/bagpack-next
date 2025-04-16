require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let otpStorage = {}; // Store OTPs temporarily

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.sanketmane0407, // Your Gmail
    pass: process.env.PASSWORD, // App password (not your real password)
  },
});

// Generate a random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Send OTP
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const otp = generateOTP();
  otpStorage[email] = otp; // Store OTP

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (otpStorage[email] === otp) {
    delete otpStorage[email]; // Remove OTP after verification
    res.json({ success: "OTP verified" });
  } else {
    res.status(400).json({ error: "Invalid OTP" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
