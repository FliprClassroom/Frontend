import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "./newclass.css";
const useUpgradeStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    top: "5%",
    left: "7%",
    width: "66%",
    height: "90%",
    // backgroundColor: "#05e395",
    backgroundColor: "white",
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
  //   const [openUpgrade, setOpenUpgrade] = useState(false);
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
              Upgrade Storage
            </h2>
            <hr style={{ borderTop: "1px solid rgba(0,179,255,0.3)" }} />
          </div>
          <div className="upgrade_plans_div">hdhfgjh</div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateNewClass;
