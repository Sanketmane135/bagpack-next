"use server";
import Login from "../models/user.model";




import { connectToDatabase } from "../lib/db";




const addUserData = async (params) => {
  console.log("Action Called");
  connectToDatabase()

  try {
      const {firstName, lastName, email, otp, password } = params
      console.log({firstName, lastName, email, otp, password });
      
      const data = Login.insertOne({firstName, lastName, email, otp, password });
      console.log(data);
      return {message:"Data Added",data}
  } catch (error) {
      console.log(error);
      
  }
}

const getUser = async () => {
    connectToDatabase()

    try {
        const data = await Login.find()
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export {addUserData,getUser}
