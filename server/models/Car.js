const { Schema, model } = require("mongoose");

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
  modification: [
    {
      preformance: {
        type: String,
      },
      functional: {
        type: String,
      },
      cosmetic: {
        type: String,
      },
    },
  ],
  // Color?
});

const Car = model("Car", carSchema);

module.exports = Car;
