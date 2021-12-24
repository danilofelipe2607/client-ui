import Home from "./home/Home";
import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CallbackPage from "./home/CallbackPage";
import LandingPage from "./home/landingPage";

const Routes = (props) => {
  return (
    <div className="App">
      {console.log("Routes props, ", props)}

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={LandingPage} />
        {/* I THINK MY ERROR LIES HERE, I COULD USE WHAT EVER PATH WITHOUT IT MEANING ANYTHING*/}
        <Route path="/callback" component={CallbackPage} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
    isLoadingUser: state.oidc.isLoadingUser,
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
)(Routes);


