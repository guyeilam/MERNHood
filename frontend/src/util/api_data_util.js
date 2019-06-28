import axios from 'axios';

export const getPrices = () => {
  return axios.get('/api/dailyStockPrices')
};

export const saveStockPriceData = (data) => {
  let dailyPriceData = {
    ticker: data.data.symbol,
    date: data.data.latest_trading_day,
    closingPrice: data.data.price
  };

  // Object.keys(data.data).forEach(date => {
  //   dailyPriceData.prices.push({
  //     date: date,
  //     price: data.data[date].close
  //   });
  // });

  return axios.post('/api/dailyStockPrices', dailyPriceData);

}