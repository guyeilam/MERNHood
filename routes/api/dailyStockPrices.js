const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const DailyStockPrice = require('../../models/DailyStockPrice');

router.get('/', (req, res) => {
  DailyStockPrice.find()
  .then(data => res.json(data));
});

router.post('/', (req, res) => {
  
  const newStockPrice = new DailyStockPrice({
    ticker: req.body.ticker,
    date: req.body.date,
    closingPrice: req.body.closingPrice
  });

  newStockPrice.save().then(() => console.log("Saved!"));
});

module.exports = router;