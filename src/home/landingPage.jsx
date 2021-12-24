import { connect } from "react-redux";
import LoginPage from "./loginPage";
import { Redirect } from "react-router-dom";
import Home from "./Home";

function LandingPage(props) {
  const { user } = props;
  console.log("user", user);
  return !user || user.expired ? <LoginPage /> : <Home />;
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
