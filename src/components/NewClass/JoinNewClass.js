import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { joinClass } from "../../redux/ActionCreator";
import Loader from "../loader/loader";
import "./newclass.css";
const useUpgradeStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    top: "15%",
    left: "30%",
    width: "50%",
    height: "65%",
    // backgroundColor: "#05e395",
    backgroundColor: "#2f2d52",
    // backgroundImage: "linear-gradient(to bottom right,#00b3ff, #ecfaff )",
    // border: "2px solid #000",
    // boxShadow: "0 0 20px rgb(0, 195, 255)",
    borderRadius: "1%",
    padding: theme.spacing(2, 4, 3),
    color: "black",
    textAlign: "center",
  },
}));

const JoinNewClass = ({ openUpgrade, setOpenUpgrade }) => {
  const dispatch = useDispatch();

  const isClassLoading = useSelector((state) => state.classes.isClassLoading);

  //   const [openUpgrade, setOpenUpgrade] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))?.id
  );
  const [subject, setSubject] = useState("");
  const handleJoin = () => {
    dispatch(joinClass({ user: user, subject: subject }));
  };
  const classesUpgrade = useUpgradeStyles();
  return (
    <div className="Detail-Modal">
      <Modal
        open={openUpgrade}
        onClose={() => {
          setOpenUpgrade();
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="upgrade_modal"
      >
        <div className={classesUpgrade.paper}>
          <div className="div_upgrade_heading">
            <h2 id="simple-modal-title" className="upgradeStorageHeading">
              Join New Class
            </h2>
            <hr style={{ borderTop: "1px solid #ffffff" }} />
          </div>
          {/* <div className="upgrade_plans_div"> */}
          <div className="form_group">
            <div className="form">
              <input
                type="text"
                name="Subject ID"
                required
                autoCapitalize={false}
                autoComplete="new-password"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="Subject ID" className="label">
                <span className="content">Subject ID</span>
              </label>
            </div>

            <button className="button" onClick={() => handleJoin()}>
              Create
            </button>
          </div>
          {/* </div> */}
        </div>
      </Modal>
    </div>
  );
};

export default JoinNewClass;
