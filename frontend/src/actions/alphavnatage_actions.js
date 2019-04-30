import apiKeys from "../util/alphavantage_keys";
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
export const receiveIntraday = payload => {
  return {
    type: RECEIVE_INTRADAY,
    data: payload.data
  };
};
// intraDay of specified equities
export const receiveBatch = payload => {
  return {
    type: RECEIVE_BATCH,
    data: payload.data
  };
};
// current quote of equity
export const receiveQuote = payload => {
  return {
    type: RECEIVE_QUOTE,
    data: payload.data
  };
};
// any pair of digital (e.g., Bitcoin) or physical (e.g., USD)
export const receiveRate = payload => {
  return {
    type: RECEIVE_RATE,
    data: payload.data
  };
};
// data on equity over specified period
export const receiveDaily = payload => {
  return {
    type: RECEIVE_DAILY,
    data: payload.data
  };
};
export const receiveWeekly = payload => {
  return {
    type: RECEIVE_WEEKLY,
    data: payload.data
  };
};
export const receiveMonthly = payload => {
  return {
    type: RECEIVE_MONTHLY,
    data: payload.data
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
    .then(results => dispatch(receiveQuote(alpha.util.polish(results))))
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    });
};
