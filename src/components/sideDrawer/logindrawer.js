import React from "react";
import "./drawer.css";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import {
  handleAuthChanges,
  clearAuthForm,
  loginUser,
} from "../../redux/ActionCreator";
const LoginDrawer = ({ showDrawer, closeDrawer, loc }) => {
  const dispatch = useDispatch();

  const handler = (prop, value) => {
    dispatch(handleAuthChanges({ prop: prop, value: value }));
  };

  const username = useSelector((state) => state.auth.username);
  const password = useSelector((state) => state.auth.password);

  const handleLogin = () => {
    dispatch(loginUser({ username, password, loc }));
  };

  let side_drawer_state = "side_drawer";
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [isTeacher, setIsTeacher] = React.useState(false);

  // const handleCheck = () => {
  //   setIsTeacher( !isTeacher);
  // };

  if (showDrawer) side_drawer_state = "side_drawer open";

  return (
    <div className={side_drawer_state}>
      {/* <IconAnimation className="icon_animation_bg" /> */}
      <div
        class=" flex justify-end mr-20 mt-10"
        onClick={() => {
          dispatch(clearAuthForm());
          closeDrawer();
        }}
      >
        <CloseIcon />
      </div>
      <h4 className="heading offset-1 mt-3">Login</h4>
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
            <span className="content">Username</span>
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
          <label htmlFor="Phone" className="label">
            <span className="content">Phone</span>
          </label>
        </div>
        <button className="button" onClick={() => handleLogin()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginDrawer;
