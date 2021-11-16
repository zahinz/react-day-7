import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import signInReducer from "./signInReducer";

export default combineReducers({
  register: registerReducer,
  signin: signInReducer,
});
