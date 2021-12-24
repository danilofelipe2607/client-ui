import React from "react";
import userManager from "../user-manager";

class LoginPage extends React.Component {
  onLoginButtonClick = () => {
    userManager.signinRedirect();
  };

  render() {
    return (
      <div>
        <h3>Welcome to the redux-oidc sample app!</h3>
        <p>Please log in to continue</p>
        <button onClick={this.onLoginButtonClick}>Redirect Login</button>
      </div>
    );
  }
}
export default LoginPage;
