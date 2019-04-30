import { connect } from "react-redux";
import WatchList from "./watch_list";
import { fetchQuote } from "../../actions/alphavnatage_actions";

const msp = state => {
  return {
    data: state.data
  };
};

const mdp = dispatch => {
  return {
    fetchQuote: params => dispatch(fetchQuote(...params))
  };
};

export default connect(
  msp,
  mdp
)(WatchList);
