import { combineReducers } from "redux";
import AuthReducer from "./authreducer";
import SnackReducer from "./SnackBarreducer";
import ClassReducer from "./ClassReducer";

export default combineReducers({
  auth: AuthReducer,
  snack: SnackReducer,
  classes: ClassReducer,
});
