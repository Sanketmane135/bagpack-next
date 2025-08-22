import mongoose, { Schema } from "mongoose";


const usersSchema = new Schema(
  {
    //define schema
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password:{ type: String, required: true },
    status: { type: String,  required: true  },
  
  },
  {
    timestamps: true,
  }
);


const Login = mongoose.models.Login || mongoose.model("Login", usersSchema);
export default Login;