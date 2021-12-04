import { Schema, model } from "mongoose";
import { User } from "./User";

const carSchema = new Schema({
  year: {
    type: Number,
    required: true,
    min: 1885,
  },
  make: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  mod_preformance: {
    type: String,
  },
  mod_functional: {
    type: String,
  },
  mod_cosmetic: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  owner: [
    {
      type: String,
      ref: "User"
    }
  ]
  // Color?
});

export const Car = model("Car", carSchema);
