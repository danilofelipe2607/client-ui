// import { handleActions } from "redux-actions";
// import { handle } from "redux-pack";
// import { fromJS } from "immutable";
// //import authenticationService from "~/services/authentication-service";

// const SIGN_IN_START = "client/sign-in/START";

// const initialState = fromJS({
//   isLoading: false,
//   data: null,
//   error: null,
// });

// const reducer = handleActions(
//   {
//     [SIGN_IN_START]: (state, action) =>
//       handle(state, action, {
//         start: (state) =>
//           state
//             .set("isLoading", false)
//             .set("data", initialState.get("data"))
//             .set("error", initialState.get("error")),
//         finish: (state) => state.set("isLoading", false),
//         success: (state) =>
//           state.set("data", {}).set("error", initialState.get("error")),
//         failure: (state) =>
//           state
//             .set("data", initialState.get("data"))
//             .set("error", fromJS(action.payload)),
//       }),
//   },
//   initialState
// );

// export default reducer;

// // export const signIn = () => ({
// //   type: SIGN_IN_START,
// //   promise: authenticationService.signIn(),
// // })

import { SESSION_TERMINATED, USER_EXPIRED } from "redux-oidc";

const SIGN_IN_START = "client/sign-in/START";
const initialState = {
  data: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_TERMINATED:
    case USER_EXPIRED:
      return Object.assign({}, state, { data: [] });
    case SIGN_IN_START:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}
export default reducer;
