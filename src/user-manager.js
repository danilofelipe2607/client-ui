import { createUserManager } from "redux-oidc";

const userManagerConfig = {
  authority: "http://localhost:5005",
  client_id: "mvc-client",
  redirect_uri: "http://localhost:8080/callback",
  response_type: "token id_token",
  scope: "openid profile api1",
  post_logout_redirect_uri: "http://localhost:8080",
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
