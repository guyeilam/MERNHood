import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import data from "./alpha_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  data
});

export default RootReducer;
