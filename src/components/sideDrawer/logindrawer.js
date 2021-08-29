import React, { useState } from "react";
import "./drawer.css";
import { Icon } from "@material-ui/core";
// import IconAnimation from "../iconAnimation/iconAnimation";
import CloseIcon from '@material-ui/icons/Close';
import Switches from "../switch/switch";
const LoginDrawer = ({ showDrawer, closeDrawer }) => {
  let side_drawer_state = "side_drawer";
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isTeacher, setIsTeacher] = React.useState(false);

  const handleCheck = () => {
    setIsTeacher( !isTeacher);
  };

  if (showDrawer) side_drawer_state = "side_drawer open";

  return (
    <div className={side_drawer_state}>
      {/* <IconAnimation className="icon_animation_bg" /> */}
      <div class=" flex justify-end mr-20 mt-10" onClick={() => closeDrawer()}>
        <CloseIcon  />
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="Phone" className="label">
            <span className="content">Phone</span>
          </label>
        </div>
        <Switches check={isTeacher} handleChange={()=>handleCheck()}/>
        <button className="button">Login</button>
      </div>
    </div>
  );
};

export default LoginDrawer;
