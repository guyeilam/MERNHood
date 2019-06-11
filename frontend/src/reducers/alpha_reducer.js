import {
  RECEIVE_INTRADAY,
  RECEIVE_QUOTE,
  RECEIVE_RATE,
  RECEIVE_DAILY,
  RECEIVE_WEEKLY,
  RECEIVE_MONTHLY
} from "../actions/alphavantage_actions";

import { merge } from "lodash";

export const _nullAlphaState = {};

export const alphaReducer = (state = _nullAlphaState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_DAILY:
      newState = merge({}, state, { [action.data.symbol]: action.data });
      return newState;
    case RECEIVE_INTRADAY:
      newState = merge({}, state, { intraday: action.data });
      return newState;
    case RECEIVE_MONTHLY:
      newState = merge({}, state, { monthly: action.data });
      return newState;
    case RECEIVE_QUOTE:
      newState = merge({}, state, { [action.data.symbol]: action.data });
      return newState;
    case RECEIVE_RATE:
      return null;
    case RECEIVE_WEEKLY:
      newState = merge({}, state, { weekly: action.data });
      return newState;
    default:
      return state;
  }
};
