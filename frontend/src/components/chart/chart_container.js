import { connect } from "react-redux";
import Chart from "./chart";

const msp = (state, ownProps) => {
  return {
    state: state,
    props: ownProps
  };
};

const mdp = dispatch => {
  return {
  };
};

export default connect(
  msp,
  mdp
)(Chart);
