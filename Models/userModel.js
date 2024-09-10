import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username kiritilishi shart"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Parol kiritilishi shart"],
  },
});

export const userModel = mongoose.model("users", userSchema);
