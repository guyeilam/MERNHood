const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Stock = require('../../models/Stock');

router.get('/', (req, res) => {
  Stock.find()
  .then(data => res.json(data));
});

router.post('/', (req, res) => {
  const newStock = new Stock({
    symbol: req.body.symbol,
    price_data: req.body.price_data
  });

  newStock.save();
});

module.exports = router;