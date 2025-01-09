import mongoose from "mongoose";

export const connectToDatabase = async (): Promise<void> => {
  try {
    const mongoUrl = process.env.MONGO_URL || " ";
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};
