import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/eventDB"; // Local MongoDB connection

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
};

export default connectDB;
