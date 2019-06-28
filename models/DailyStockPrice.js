const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyStockPriceSchema = new Schema({
  ticker: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  closingPrice: {
    type: Number,
    required: true
  }
});

module.exports = DailyStockPrice = mongoose.model('dailyStockPrice', DailyStockPriceSchema);