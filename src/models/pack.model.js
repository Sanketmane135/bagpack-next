import mongoose, { Schema } from "mongoose";
import { stringify } from "querystring";

const packSchema = new Schema(
  {
    //define schema
    packName: { type: String, required: true },
    adultsId: { type: Number, required: true },
    childId: { type: Number, required: true },
    name:{ type: String, required: true },
    phoneNO: { type: Number, required: true },
    starDate: { type: String, required: true },
    endDate: { type: String, required: true },
    acco:{type: String, required: true},
    emailId:{type: String, required: true},

  },
  {
    timestamps: true,
  }
);

const Package = mongoose.models.Package || mongoose.model("Package", packSchema);
export default Package;