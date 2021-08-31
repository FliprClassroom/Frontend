import * as ActionTypes from "../ActionTypes";

const initialState = {
  msg: "",
  isVisible: false,
  severity: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MESSAGE:
      return {
        ...state,
        msg: action.payload.message,
        severity: action.payload.severity,
      };
    case ActionTypes.HANDLE_SNACK_CHANGES:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    default:
      return state;
  }
};
