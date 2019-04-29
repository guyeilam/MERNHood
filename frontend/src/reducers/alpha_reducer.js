import {
  RECEIVE_INTRADAY,
  RECEIVE_BATCH,
  RECEIVE_QUOTE,
  RECEIVE_RATE,
  RECEIVE_DAILY,
  RECEIVE_WEEKLY,
  RECEIVE_MONTHLY
} from "../actions/alphavnatage_actions";

const _nullData = {};

export default (state = _nullData, action) => {
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
      debugger;
      return null;
    case RECEIVE_RATE:
      return null;
    case RECEIVE_WEEKLY:
      return null;
    default:
      return state;
  }
};
