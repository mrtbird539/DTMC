import isEmail from "validator/lib/isEmail";

const { Schema, model } = require("mongoose");

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

const User = model("User", userSchema);

module.exports = User;
