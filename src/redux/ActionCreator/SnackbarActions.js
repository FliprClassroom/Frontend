import * as ActionTypes from "../ActionTypes";

export const showMessage = ({message,severity}) => {
  return {
    type: ActionTypes.SHOW_MESSAGE,
    payload: {message,severity}
  };
};

export const handleSnackChanges = ({ prop, value }) => {
  return {
    type: ActionTypes.HANDLE_SNACK_CHANGES,
    payload: { prop, value },
  };
};
