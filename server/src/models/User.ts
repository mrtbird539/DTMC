import isEmail from "validator/lib/isEmail";

import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, "Please enter a valid email address."],
  },
  // Location?
  // Instagram?
  // Personal URL?
});

export const User = model("User", userSchema);
