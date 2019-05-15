import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import { alphaReducer } from "./alpha_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  data: alphaReducer
});

export default RootReducer;
