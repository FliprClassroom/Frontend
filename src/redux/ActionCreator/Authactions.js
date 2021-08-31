import * as ActionTypes from "../ActionTypes";
import axios from "../../axios";
import { handleSnackChanges, showMessage } from "./SnackbarActions";

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
        is_staff: is_staff,
      });
      //   console.log(response, "=============>>>>");
      if (response.status === 201) {
        dispatch(handleSnackChanges({ prop: "isVisible", value: true }));
        dispatch(
          showMessage({
            message: "Sign up successful! Please Login",
            severity: "success",
          })
        );
        dispatch(handleAuthChanges({ prop: "isAuthLoading", value: false }));
      }
    } catch (err) {
      console.log(err);
    }
  };

export const loginUser =
  ({ username, password, loc }) =>
  async (dispatch) => {
    dispatch(handleAuthChanges({ prop: "isAuthLoading", value: true }));

    try {
      let response = await axios.post("/login/", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        dispatch(fetchUser({ token: response.data.access }));
        dispatch(handleAuthChanges({ prop: "isAuthLoading", value: false }));
        localStorage.setItem("login_access_token", response.data.access);
        console.log("=========>>>");
        // <Redirect
        //   to={{
        //     pathname: "/home",
        //     state: { from: loc },
        //   }}
        // />;
        loc.push("/");
        console.log("=========>>>");
      }
    } catch (err) {
      console.log(err);
    }
  };

export const clearAuthForm = () => {
  return {
    type: ActionTypes.CLEAR_AUTH_FORM,
  };
};

export const fetchUser =
  ({ token }) =>
  async (dispatch) => {
    try {
      let response = await axios.post("/getuser/", {
        token: token,
      });

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(handleAuthChanges({ prop: "user", value: response.data }));
      }
    } catch (err) {
      console.log(err);
    }
  };
