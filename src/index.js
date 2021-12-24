import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { OidcProvider } from "redux-oidc";
import userManager from "./user-manager";
//import store from "./store";
import { createHashHistory } from "history";
import configureStore from "./store";

const rootElement = document.getElementById("root");
const history = createHashHistory();
const store = configureStore(history);
render(
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <App />
    </OidcProvider>
  </Provider>,
  rootElement
);
