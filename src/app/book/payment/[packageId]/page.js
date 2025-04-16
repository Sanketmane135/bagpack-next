"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Qrcode from '../../../components/generateUPI';
import {addTransactionToData} from '../../../../actions/transaction.action'

function Page() {
  const pathname = usePathname(); 
  const currentId = pathname.split("/").pop();
  const router = useRouter();
  const [transId, settransId] = useState('');
  const [amount, setAmount] = useState(1)
  const [qrShow, setQrshow] = useState(false);

  useEffect(() => {
    // Dynamically set amount based on currentId
    if (currentId === "Goa") {
      setAmount(20000);
    } else if (currentId === "Kerala") {
      setAmount(70000);
    }else if(currentId === "Maharashtra"){
      setAmount(15000);
    }else if(currentId === "Rajasthan"){
      setAmount(30000);
    } else if(currentId === "NorthEast"){
      setAmount(80000)
    }else if(currentId === "Kashmir"){
      setAmount(80000)
    }else if(currentId === "HimachalPradesh"){
      setAmount(70000)
    }else if(currentId === "Andaman"){
      setAmount(90000)
    }else if(currentId === "Gujarat"){
      setAmount(55000)
    }
    else {
      setAmount(1); 
    }
  }, [currentId]);

  const afterIdSubmit = async(e) => {
    e.preventDefault();
    if (transId === '') {
      alert("Please submit your transaction ID.");
    } else if (transId.length < 10) {
      alert("Transaction ID must be at least 10 digits.");
    } else {
      alert("Successfully Submitted! Our team will contact you soon.");
      router.push('/');
    }

   
      console.log("Add user Function Calls");
      const result = await addTransactionToData({transId:transId} )
      

  
  };

 
  return (
    <div className='payment-main'>
      <h3 className='h3-payment-heading'>Pay for your amazing {currentId} trip</h3>
      <div className='payment-inner'> 
        <div className='payment-headings'>
          {/* Replace SVG if path is invalid */}
          <p>Scan and Pay</p>
        </div>

        <div className='qrcode-maain'>
          <Qrcode amount={amount} />
        </div>

        <form className='transaction-id-div'>
          <label>After Transaction submit your Transaction Id below</label>
          <input
            type='number'
            placeholder='Transaction Id'
            className='transcation-id-input'
            value={transId}
            onChange={(e) => settransId(e.target.value)}
          />
          
          <button className='id-submit-btn' onClick={afterIdSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
