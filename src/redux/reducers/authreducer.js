import * as ActionTypes from "../ActionTypes.js";

const initialState = {
  username: "",
  email: "",
  password: "",
  is_staff: false,
  isAuthloading: false,
  errMsg: "",
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HANDLE_AUTH_CHANGES:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    case ActionTypes.CLEAR_AUTH_FORM:
      return {
        ...state,
        username: "",
        email: "",
        password: "",
        is_staff: "",
        isAuthloading: false,
        errMsg: "",
      };
    default:
      return state;
  }
};
