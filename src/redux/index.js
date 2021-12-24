import signIn from "./sign-in";
import signOut from "./sign-out";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as oidcReducer } from "redux-oidc";

const rootReducer = (history) =>
  combineReducers({
    signIn: signIn,
    signOut: signOut,
    router: connectRouter(history),
    oidc: oidcReducer,
  });

export default rootReducer;
