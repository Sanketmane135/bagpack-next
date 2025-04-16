// import generateQR from "@omkarbhosale/upiqr";


// const GenerateQrCode = async({amount})=>{
//   let data = await generateQR({ UPI_ID: "sanketmane0407@okhdfcbank", AMOUNT: amount });

//   return (
//     <img src={data} alt="qr code"/>
//           )
// }

// export default GenerateQrCode

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import generateQR from "@omkarbhosale/upiqr";

// Pieces: Comment | Pieces: Explain
const Qrcode = ({ amount }) => {
  const [qrCode, setQrCode] = useState(null);
  const [error, setError] = useState(null);

  console.log(process.env.NEXT_PUBLIC_UPI_ID);

  // Pieces: Comment | Pieces: Explain
  useEffect(() => {
    // Pieces: Comment | Pieces: Explain
    const fetchQRCode = async () => {
      try {
        // Generate the QR code as a Base64 URL
        const data = await generateQR({
          UPI_ID: process.env.NEXT_PUBLIC_UPI_ID,
          AMOUNT: amount,
        });
        setQrCode(data);
      } catch (error) {
        setError("Error generating QR code");
        console.error("Error generating QR code:", error);
      }
    };

    fetchQRCode();
  }, [amount]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : qrCode ? (
        <Image src={qrCode} alt="UPI QR Code" width={200} height={200} />
      ) : (
        <p>Loading QR code...</p>
      )}
    </div>
  );
};

export default Qrcode;