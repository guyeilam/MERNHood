import axios from 'axios';

export const getPrices = () => {
  return axios.get('/api/stocks')
};

export const saveDailyData = (symbol, data) => {
  // Data needs to be in this form:
  // {
  //  symbol: "MSFT",
  //  price_data: { [date, price] }
  // }
  let stockData = {
    symbol: symbol,
    price_data: [data.latest_trading_day, data.price]
  };

  return axios.post('/api/stocks', stockData);
}

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