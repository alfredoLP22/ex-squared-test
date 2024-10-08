import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const mongoUri = process.env.MONGO_URI

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};
