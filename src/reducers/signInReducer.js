import * as type from "../types";

const defaultState = {
  isLoading: false,
  isSignIn: false,
  user: {},
  error: null,
};

const signInReducer = (state, action) => {
  switch (action.type) {
    case type.SIGNIN:
      return {
        isLoading: true,
        isSignIn: false,
        user: {},
        error: null,
      };

    case type.SIGNIN_SUCCESS:
      return {
        isLoading: false,
        isSignIn: true,
        user: action.payload,
        error: null,
      };

    case type.SIGNIN_FAILED:
      return {
        isLoading: false,
        isSignIn: false,
        user: state.data,
        error: action.error,
      };
    default:
      return defaultState;
  }
};

export default signInReducer;
