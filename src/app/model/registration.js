import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  event: { type: String, required: true },
});

export default mongoose.models.Registration || mongoose.model("Registration", RegistrationSchema);
