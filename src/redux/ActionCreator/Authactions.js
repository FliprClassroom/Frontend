import * as ActionTypes from "../ActionTypes";
import axios from "../../axios";

export const handleAuthChanges = ({ prop, value }) => {
  return {
    type: ActionTypes.HANDLE_AUTH_CHANGES,
    payload: { prop, value },
  };
};

export const signupUser =
  ({ username, password, email, is_staff }) =>
  async (dispatch) => {
    dispatch(handleAuthChanges({ prop: "isAuthLoading", value: true }));

    try {
      // console.log(username,password,email)
      let response = await axios.post("/register/", {
        username: username,
        email: email,
        password: password,
        // is_staff:is_staff
      });
      //   console.log(response, "=============>>>>");
      if (response.status === 201) {
        dispatch(handleAuthChanges({ prop: "isAuthLoading", value: false }));
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
