"use server";
import Package from "../models/pack.model";
import { connectToDatabase } from "../lib/db";

const addPackData = async (params) => {
  console.log("Action Called");
  connectToDatabase()

  try {
      const {packName,adultsId,childId,name, phoneNO, starDate,endDate,acco, emailId} = params
      console.log({packName,adultsId,childId,name, phoneNO, starDate,endDate,acco, emailId });
      
      const data = Package.insertOne({packName,adultsId,childId,name, phoneNO, starDate,endDate,acco, emailId });
      console.log(data);
      return {message:"Data Added",data}
  } catch (error) {
      console.log(error);
      
  }
}
export {addPackData}
