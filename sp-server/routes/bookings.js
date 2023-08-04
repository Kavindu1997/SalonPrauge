const express = require("express");
const router = express.Router();
const { Booking, validate } = require("../models/booking");
const sendEmail = require("../models/mail");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const booking = new Booking(req.body);

  await booking.save();

  res.status(201).send(req.body);
  sendEmail(req.body);
});

module.exports = router;
