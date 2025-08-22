import mongoose, { Schema } from "mongoose";


const tripcardschema = new Schema(
  {
    //define schema
    tripprice:{type: Number, required:true},
    tripname:{type: String, required:true},
  },
  {
    timestamps: true,
  }
);

const Tripcard = mongoose.models.Tripcard || mongoose.model("Tripcard", tripcardschema);
export default Tripcard;