import React from "react";
import "./drawer.css";
import { useSelector, useDispatch } from "react-redux";
import {
  handleAuthChanges,
  signupUser,
  clearAuthForm,
} from "../../redux/ActionCreator";
// import IconAnimation from "../iconAnimation/iconAnimation";
import CloseIcon from "@material-ui/icons/Close";
import Switches from "../switch/switch";
import SnackBar from "../SnackBar/SnackBar";
const SignupDrawer = ({ showDrawer, closeDrawer }) => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.auth.username);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const is_staff = useSelector((state) => state.auth.is_staff);

  const handler = (prop, value) => {
    dispatch(handleAuthChanges({ prop: prop, value: value }));
  };

  let side_drawer_state = "side_drawer";
  if (showDrawer) side_drawer_state = "side_drawer open";

  const handleSignup = () => {
    dispatch(signupUser({ username, password, email, is_staff }));
  };

  return (
    <div className={side_drawer_state}>
      <SnackBar bool={true} />
      {/* <IconAnimation className="icon_animation_bg" />  */}
      <div
        class=" flex justify-end mr-20 mt-10"
        onClick={() => {
          dispatch(clearAuthForm());
          closeDrawer();
        }}
      >
        <CloseIcon />
      </div>
      <h4 className="heading offset-1 mt-3">Sign up</h4>
      <div className="form_group">
        <div className="form">
          <input
            type="text"
            name="Name"
            required
            autoCapitalize={false}
            autoComplete="new-password"
            value={username}
            onChange={(e) => handler("username", e.target.value)}
          />
          <label htmlFor="Name" className="label">
            <span className="content">Name</span>
          </label>
        </div>
        <div className="form">
          <input
            type="email"
            name="Email"
            required
            autoCapitalize={false}
            value={email}
            onChange={(e) => handler("email", e.target.value)}
          />
          <label htmlFor="Email" className="label">
            <span className="content">Email</span>
          </label>
        </div>
        <div className="form">
          <input
            type="password"
            name="Password"
            required
            autoCapitalize={false}
            value={password}
            onChange={(e) => handler("password", e.target.value)}
          />
          <label htmlFor="Password" className="label">
            <span className="content">Password</span>
          </label>
        </div>
        <Switches
          state={is_staff}
          handleChange={() => handler("is_staff", !is_staff)}
        />
        <button className="button" onClick={() => handleSignup()}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupDrawer;
