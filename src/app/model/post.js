import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: {
      type: [String], // Array of strings
      default: [], // Default to an empty array
    },
    imageUrl: {
      type: String,
      default: "", // Default to an empty string
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Export the model
export default mongoose.models.Post || mongoose.model("Post", postSchema);