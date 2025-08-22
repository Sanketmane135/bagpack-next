"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Qrcode from "../../../../components/generateUPI";
import { addTransactionToData } from "../../../../../actions/transaction.action";

function Page() {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop(); // Trip ID from URL
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get query params safely
  const children = parseInt(searchParams.get("children") || "0", 10);
  const adults = parseInt(searchParams.get("adults") || "0", 10);
  const packpid = searchParams.get("packpid");

  const [totalPeople] = useState(children + adults);
  const [packages, setPackages] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [transId, setTransId] = useState("");
  const [amount, setAmount] = useState(0);

  console.log("Trip ID:", currentId);
  console.log("Children:", children);
  console.log("Adults:", adults);
  console.log("Pack ID:", packpid);

  // Fetch package details
  useEffect(() => {
    if (!packpid) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    const fetchPackage = async () => {
      try {
        console.log("Fetching package for:", packpid);
        const res = await axios.get(
          `https://bagpackbackendweb.onrender.com/api/bagpack/builtpackages/${packpid}`
        );

        console.log("API Response:", res.data);

        if (!res.data.tripPack) {
          console.error("Package not found for ID:", packpid);
          setNotFound(true);
        } else {
          setPackages(res.data.tripPack);
          setAmount(res.data.tripPack.price * totalPeople);
          setNotFound(false);
        }
      } catch (err) {
        console.error("Error fetching package:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [packpid, totalPeople]);

  const afterIdSubmit = async (e) => {
    e.preventDefault();

    if (!transId.trim()) {
      alert("Please submit your transaction ID.");
      return;
    }
    if (transId.length < 10) {
      alert("Transaction ID must be at least 10 digits.");
      return;
    }

    alert("Successfully Submitted! Our team will contact you soon.");

    try {
      await addTransactionToData({
        transId: transId,
        status: "unchecked",
      });
      router.push("/");
    } catch (error) {
      console.error("Error saving transaction:", error);
      alert("Failed to submit. Please try again.");
    }
  };

  // Handle trip not found
  if (notFound && !loading) {
    return (
      <div className="payment-main">
        <h3 className="h3-payment-heading">
          Trip not found. Please go back and choose a valid trip.
        </h3>
        <button onClick={() => router.push("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="payment-main">
      <h3 className="h3-payment-heading">Pay for your trip</h3>

      <div className="payment-inner">
        <div className="payment-headings">
          <p>Scan and Pay</p>
        </div>

        <div className="qrcode-maain">
          {loading ? (
            <p>Loading payment details...</p>
          ) : (
            packages && amount > 0 && (
              <Qrcode amount={amount} totalPeople={totalPeople} />
            )
          )}
        </div>

        <form className="transaction-id-div" onSubmit={afterIdSubmit}>
          <label>After Transaction submit your Transaction Id below</label>
          <input
            type="number"
            placeholder="Transaction Id"
            className="transcation-id-input"
            value={transId}
            onChange={(e) => setTransId(e.target.value)}
          />
          <button className="id-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
