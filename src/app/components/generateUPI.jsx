"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import generateQR from "@omkarbhosale/upiqr";

const Qrcode = ({ amount, totalPeople }) => {
  const [qrCode, setQrCode] = useState(null);
  const [error, setError] = useState(null);

  // Ensure numbers
  const totalAmount = Number(amount) * Number(totalPeople);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        // if (isNaN(totalAmount) || totalAmount <= 0) {
        //   setError("Invalid amount");
        //   return;
        // }

        const data = await generateQR({
          UPI_ID: process.env.NEXT_PUBLIC_UPI_ID,
          AMOUNT: Number(amount), // keep as number
        });

        setQrCode(data);
      } catch (error) {
        setError("Error generating QR code");
        console.error("Error generating QR code:", error);
      }
    };

    fetchQRCode();
  }, [totalAmount]);

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
