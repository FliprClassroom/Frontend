import * as ActionTypes from "../ActionTypes";

const initialState = {
  isClassLoading: false,
  classes: [],
  assignments: [],
  exams: [],
  allClasses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HANDLE_CLASS_CHANGES:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    default:
      return state;
  }
};
