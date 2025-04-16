import mongoose, { Schema } from "mongoose";

const tripSchema = new Schema(
  {
    //define schema
  
    dest: { type: String, required: true },
    adultNo: { type: Number, required: true },
    childNo: { type: Number, required: true },
    startDateNo: { type: String, required: true },
    endDateNO: { type: String, required: true },
    accommodationNO: { type: String, required: true },

  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.models.Trip || mongoose.model("Trip", tripSchema);
export default Trip;