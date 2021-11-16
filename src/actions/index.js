import * as type from "../types";

export const submitRegister = (data) => (dispatch) => {
  try {
    dispatch({
      type: type.REGISTER,
    });
    setTimeout(() => {
      dispatch({
        type: type.REGISTER_SUCCESS,
        payload: data,
      });
    }, 4000);
  } catch (error) {
    dispatch({
      type: type.REGISTER_FAILED,
      error: error,
    });
  }
};

export const resetRegister = () => {
  return {
    type: type.REGISTER_RESET,
  };
};

export const submitSignIn = (data) => (dispatch) => {
  try {
    dispatch({
      type: type.SIGNIN,
    });
    setTimeout(() => {
      dispatch({
        type: type.SIGNIN_SUCCESS,
        payload: data,
      });
    }, 1);
  } catch (error) {
    dispatch({
      type: type.SIGNIN_FAILED,
      error: error,
    });
  }
};
