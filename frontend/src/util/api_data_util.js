import axios from 'axios';

export const getPrices = () => {
  return axios.get('/api/stocks')
};

export const saveWeeklyData = (symbol, data) => {
  let stockData = {
    symbol: symbol,
    price_data: data
  };

  // Object.keys(data.data).forEach(date => {
  //   dailyPriceData.prices.push({
  //     date: date,
  //     price: data.data[date].close
  //   });
  // });

  return axios.post('/api/stocks', stockData);

}