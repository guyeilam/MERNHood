import { connect } from "react-redux";
import WatchList from "./watch_list";
import {
  fetchQuote,
  fetchIntraDay,
  fetchMonthly,
  fetchWeekly
} from "../../actions/alphavantage_actions";

const msp = state => {
  return {
    data: state.data
  };
};

const mdp = dispatch => {
  return {
    fetchQuote: params => dispatch(fetchQuote(...params)),
    fetchIntraDay: params => dispatch(fetchIntraDay(...params)),
    fetchWeekly: params => dispatch(fetchWeekly(...params)),
    fetchMonthly: params => dispatch(fetchMonthly(...params))
  };
};

export default connect(
  msp,
  mdp
)(WatchList);
