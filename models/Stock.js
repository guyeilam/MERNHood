const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  symbol: {
    type: String,
    required: true
  },
  price_data: {
    type: Object,
    default: {}
  }
});

module.exports = Stock = mongoose.model('stock', StockSchema);