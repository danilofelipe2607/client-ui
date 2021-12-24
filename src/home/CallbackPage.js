import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";

class CallbackPage extends React.Component {
  successCallback = (user) => {
    this.props.dispatch(push("/"));
  };
  errorCallback = (error) => {
    console.error(
      "There was an error handling the token callback: " + error.message
    );
  };

  render() {
    // just redirect to '/' in both cases
    return (
      <>
        <CallbackComponent successCallback={this.successCallback}>
          <div>Redirecting...</div>
        </CallbackComponent>
      </>
    );
  }
}

export default connect()(CallbackPage);
