import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { createClass } from "../../redux/ActionCreator";
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

const CreateNewClass = ({ openUpgrade, setOpenUpgrade }) => {
  const dispatch = useDispatch();

  const isClassLoading = useSelector((state) => state.classes.isClassLoading);

  //   const [openUpgrade, setOpenUpgrade] = useState(false);
  const [name, setName] = useState("");
  const [meet, setMeet] = useState("");
  const [tName, setTName] = useState("");
  const handleCreate = () => {
    dispatch(createClass({ name: name, link: meet, teachername: tName }));
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
              Create New Class
            </h2>
            <hr style={{ borderTop: "1px solid #ffffff" }} />
          </div>
          {/* <div className="upgrade_plans_div"> */}
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
                <span className="content">Name</span>
              </label>
            </div>
            <div className="form">
              <input
                type="text"
                name="Meet Link"
                required
                autoCapitalize={false}
                value={meet}
                onChange={(e) => setMeet(e.target.value)}
              />
              <label htmlFor="Meet Link" className="label">
                <span className="content">Meet Link</span>
              </label>
            </div>
            <div className="form">
              <input
                type="text"
                name="Teacher Name"
                required
                autoCapitalize={false}
                value={tName}
                onChange={(e) => setTName(e.target.value)}
              />
              <label htmlFor="Teacher Name" className="label">
                <span className="content">Teacher Name</span>
              </label>
            </div>
            <button className="button" onClick={() => handleCreate()}>
              Create
            </button>
          </div>
          {/* </div> */}
        </div>
      </Modal>
    </div>
  );
};

export default CreateNewClass;
