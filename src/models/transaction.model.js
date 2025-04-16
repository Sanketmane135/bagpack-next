import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    //define schema
    transId: { type: Number, required: true },

  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);
export default Transaction;