"use server";
import Login from "../models/user.model";




import { connectToDatabase } from "../lib/db";




const addUserData = async (params) => {
  console.log("Action Called");
  connectToDatabase()

  try {
      const {firstName, lastName, email,  password ,status} = params
      console.log({firstName, lastName, email,  password , status});
      
      const data = await Login.create({firstName, lastName, email, password, status});
      // await Login.create({ firstName, lastName, email, password });
      console.log(data);
      return {message:"Data Added",data}
  } catch (error) {
      console.log(error);
      
  }
}

const getUser = async (params) => {
    connectToDatabase();
    const { email, password } = params;
  
    try {
      const data = await Login.findOne({ email, password });
  
      return data?.toObject(); // ✅ Mongoose object to plain JS object
    } catch (error) {
      console.log("Error in getUser:", error);
      return null;
    }
  };
  
export {addUserData,getUser}
