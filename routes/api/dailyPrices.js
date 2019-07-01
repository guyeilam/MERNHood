const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const DailyPrice = require('../../models/DailyPrice');

router.get('/', (req, res) => {
  DailyPrice.find()
  .then(data => res.json(data));
});

router.post('/', (req, res) => {
  const newDailyPrice = new DailyPrice({
    ticker: req.body.ticker,
    date: req.body.date,
    closingPrice: req.body.closingPrice
  });

  newDailyPrice.save();
});

module.exports = router;