"use server";
import Transaction from "../models/transaction.model";
import { connectToDatabase } from "../lib/db";

const addTransactionToData = async (params) => {
  console.log("Action Called");
  connectToDatabase()

  try {
      const {transId,status} = params
      console.log({transId ,status});
      
      const data = Transaction.insertOne({transId,status});
      console.log(data);
      return {message:"Data Added",data}
  } catch (error) {
      console.log(error);
      
  }
}
export {addTransactionToData}
