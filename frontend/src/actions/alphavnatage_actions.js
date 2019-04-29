import apiKeys from "../../../config/alphavantage_keys";
import { receiveErrors } from "./session_actions";
const alpha = require("alphavantage")({ key: apiKeys });

export const RECEIVE_INTRADAY = "RECEIVE_INTRADAY";
export const RECEIVE_BATCH = "RECEIVE_BATCH";
export const RECEIVE_QUOTE = "RECEIVE_QUOTE";
export const RECEIVE_RATE = "RECEIVE_RATE";
export const RECEIVE_DAILY = "RECEIVE_DAILY";
export const RECEIVE_WEEKLY = "RECEIVE_WEEKLY";
export const RECEIVE_MONTHLY = "RECEIVE_MONTHLY";

// (timestamp, open, high, low, close, volume) of equity
export const receiveIntraday = data => {
  return {
    type: RECEIVE_INTRADAY,
    data
  };
};
// intraDay of specified equities
export const receiveBatch = data => {
  return {
    type: RECEIVE_BATCH,
    data
  };
};
// current quote of equity
export const receiveQuote = data => {
  return {
    type: RECEIVE_QUOTE,
    data
  };
};
// any pair of digital (e.g., Bitcoin) or physical (e.g., USD)
export const receiveRate = data => {
  return {
    type: RECEIVE_RATE,
    data
  };
};
// data on equity over specified period
export const receiveDaily = data => {
  return {
    type: RECEIVE_DAILY,
    data
  };
};
export const receiveWeekly = data => {
  return {
    type: RECEIVE_WEEKLY,
    data
  };
};
export const receiveMonthly = data => {
  return {
    type: RECEIVE_MONTHLY,
    data
  };
};

export const fetchQuote = (
  symbol,
  outputsize,
  datatype,
  interval
) => dispatch => {
  return alpha.data
    .quote(symbol, outputsize, datatype, interval)
    .then(results => dispatch(receiveQuote(results)))
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    });
};
