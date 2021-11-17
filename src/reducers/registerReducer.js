import * as type from "../types";

const defaultState = {
  isLoading: false,
  isSignedUp: false,
  data: [],
  error: null,
};

const registerReducer = (state, action) => {
  if (typeof state === "undefined") {
    return defaultState;
  }
  switch (action.type) {
    case type.REGISTER:
      return {
        isLoading: true,
        isSignedUp: false,
        data: [...state.data],
        error: null,
      };

    case type.REGISTER_SUCCESS:
      return {
        isLoading: false,
        isSignedUp: true,
        data: [...state.data, action.payload],
        error: null,
      };

    case type.REGISTER_FAILED:
      return {
        isLoading: false,
        isSignedUp: false,
        data: [...state.data],
        error: action.error,
      };

    case type.REGISTER_RESET:
      return {
        isLoading: false,
        isSignedUp: false,
        data: [...state.data],
        error: null,
      };

    default:
      return state;
  }
};

export default registerReducer;
