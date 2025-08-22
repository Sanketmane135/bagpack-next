"use server";
import Trip from "../models/trips.model";
import { connectToDatabase } from "../lib/db";

const addTripToData = async (params) => {
  console.log("Action Called");
  connectToDatabase()

  try {
      const {dest,adultNo,childNo,startDateNo,endDateNO,accommodationNO,usermail,status} = params
      console.log({ dest,adultNo,childNo,startDateNo,endDateNO,accommodationNO,usermail,status});
      
      const data = Trip.insertMany({dest,adultNo,childNo,startDateNo,endDateNO,accommodationNO,usermail,status});
      console.log(data);
      return {message:"Data Added",data}
  } catch (error) {
      console.log(error);
      
  }
}

const getTrip = async (params) => {
    connectToDatabase()
    const {email}=params
    try {
        const data = await Trip.findOne({ usermail: `${email}` });
       
        return data?.toObject();

    } catch (error) {
        console.log(error);
        
    }
}

export {addTripToData,getTrip }
