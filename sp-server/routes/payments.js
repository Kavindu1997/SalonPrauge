const express = require("express");
const router = express.Router();
const Stripe = require("stripe")(process.env.SECRET_KEY);

router.post("/", async (req, res) => {
  const { token, amount } = req.body;

  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    res.status(200).send({ status: "success" });
  } catch (ex) {
    res.status(400).send({ status: "failed" });
  }
});

module.exports = router;
