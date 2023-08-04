const mongoose = require("mongoose");
const Joi = require("joi");

const bookingSchema = new mongoose.Schema({
  serviceId: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

function validateBooking(booking) {
  const schema = Joi.object({
    serviceId: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required().email(),
    date: Joi.string().required(),
    time: Joi.string().required(),
  }).unknown();

  return schema.validate(booking);
}

exports.Booking = Booking;
exports.validate = validateBooking;
