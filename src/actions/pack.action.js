"use server";
import Package from "../models/pack.model";
import { connectToDatabase } from "../lib/db";

const addPackData = async (params) => {
  console.log("Action Called");
  connectToDatabase()

  try {
      const {packName,adultsId,childId,name, phoneNO, starDate,acco, emailId,status} = params
      console.log({packName,adultsId,childId,name, phoneNO, starDate,acco, emailId,status });
      
      const data = Package.insertOne({packName,adultsId,childId,name, phoneNO, starDate,acco, emailId,status });
      console.log(data);
      return {message:"Data Added",data}
  } catch (error) {
      console.log(error);
      
  }
}

const getPackTrip = async (params) => {
    connectToDatabase();
    // console.log("Email in the params : ",params);
    
    const email=params;
    try {
        const data = await Package.find({ emailId: params });
        // console.log(data)
        
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {addPackData, getPackTrip}
