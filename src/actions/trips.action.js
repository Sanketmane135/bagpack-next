"use server";
import Trip from "../models/trips.model";
import { connectToDatabase } from "../lib/db";

const addTripToData = async (params) => {
  console.log("Action Called");
  connectToDatabase()

  try {
      const {dest,adultNo,childNo,startDateNo,endDateNO,accommodationNO} = params
      console.log({ dest,adultNo,childNo,startDateNo,endDateNO,accommodationNO});
      
      const data = Trip.insertMany({dest,adultNo,childNo,startDateNo,endDateNO,accommodationNO});
      console.log(data);
      return {message:"Data Added",data}
  } catch (error) {
      console.log(error);
      
  }
}
export {addTripToData}
