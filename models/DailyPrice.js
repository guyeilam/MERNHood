const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyPriceSchema = new Schema({
  stock: {
    type: Schema.Types.ObjectId,
    ref: 'stocks'
  },
  close_date: {
    type: Date,
    required: true
  },
  close_price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = DailyPrice = mongoose.model('dailyPrice', DailyPriceSchema);