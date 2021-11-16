const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});

const Car = model("Car", carSchema);

module.exports = Car;
