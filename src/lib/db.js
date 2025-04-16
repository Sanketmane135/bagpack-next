import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to database.");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, 
    });

    console.log("Connected to database");
  } catch (error) {
    console.error("Error while connecting to database:", error);
  }
};
