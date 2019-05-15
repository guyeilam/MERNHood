import {
  RECEIVE_INTRADAY,
  RECEIVE_BATCH,
  RECEIVE_QUOTE,
  RECEIVE_RATE,
  RECEIVE_DAILY,
  RECEIVE_WEEKLY,
  RECEIVE_MONTHLY
} from "../actions/alphavantage_actions";

import { merge } from "lodash";

export const _nullAlphaState = {};

export const alphaReducer = (state = _nullAlphaState, action) => {
  switch (action.type) {
    case RECEIVE_BATCH:
      return null;
    case RECEIVE_DAILY:
      return null;
    case RECEIVE_INTRADAY:
      return null;
    case RECEIVE_MONTHLY:
      return null;
    case RECEIVE_QUOTE:
      const newState = merge({}, state, { [action.data.symbol]: action.data });
      return newState;
    case RECEIVE_RATE:
      return null;
    case RECEIVE_WEEKLY:
      return null;
    default:
      return state;
  }
};
