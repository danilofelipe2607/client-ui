import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import createOidcMiddleware, { loadUser } from "redux-oidc";
import userManager from "./user-manager";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./redux";

const configureStore = (history) => {
  const oidcMiddleware = createOidcMiddleware(userManager);

  const allReducers = rootReducer(history);

  const store = createStore(
    allReducers,
    applyMiddleware(
      oidcMiddleware,
      thunkMiddleware,
      routerMiddleware(history),
      logger
    )
  );
  loadUser(store, userManager);

  return store;
};

export default configureStore;

// function configureStore(preloadedState) {
//   const middlewares = [thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);
//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);

//   /*if (process.env.NODE_ENV !== 'production' && module.hot) {
//         module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//     }*/

//   return createStore(rootReducer, preloadedState, composedEnhancers);
// }

// const store = configureStore();

// loadUser(store, userManager)
//   .then((user) => {
//     console.log("USER_FOUND", user);
//     if (user) {
//       store.dispatch({
//         type: "redux-oidc/USER_FOUND",
//         payload: user,
//       });
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// export default store;
