import { Schema, model } from "mongoose";

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
  // Color?
});

export const Car = model("Car", carSchema);
