const express = require("express");
const cors = require("cors");
const payments = require("../routes/payments");
const bookings = require("../routes/bookings");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/payments", payments);
  app.use("/api/bookings", bookings);
};
