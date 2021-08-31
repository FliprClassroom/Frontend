import React, { useState } from "react";
import LoadingContainer from "../../components/LoadingContainer/LoadingContainer";
import LandingImg from "../../asset/LandingImg1.jpg";
import * as Access from "../../asset/AccessFromAnywhere.json";
import * as All from "../../asset/AllInOnePlace.json";
import * as Built from "../../asset/BuiltForCollab.json";
import * as Easy from "../../asset/EasyToUse.json";
import * as Student from "../../asset/StudentLandingPage2.json";
import SignupDrawer from "../../components/sideDrawer/signupdrawer";
import LoginDrawer from "../../components/sideDrawer/logindrawer";
import { useSelector } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import "./LandingPage.css";
import Loader from "../../components/loader/loader";
import { useHistory, useLocation } from "react-router-dom";
const LandingPage = (props) => {
  const isAuthLoading = useSelector((state) => state.auth.isAuthLoading);

  const [signupDrawer, setSignupDrawer] = useState(false);
  const [showLoginDrawer, setShowLoginDrawer] = useState(false);
  const useBackdrop = makeStyles((theme) => ({
    backdrop: {
      zIndex: 100,
      color: "#fff",
    },
  }));
  const classes = useBackdrop();
  const [open, setOpen] = React.useState(false);
  const loc = useHistory();
  const handleClose = () => {
    setOpen(false);
    setShowLoginDrawer(false);
    setSignupDrawer(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return isAuthLoading ? (
    <Loader />
  ) : (
    <div className="LandingPageDiv">
      {/* <Loader/> */}
      <div class="h-screen w-screen grid grid-cols-12 grid-rows-6 gap-2">
        <div class="self-center col-span-12 row-span-1 justify-between flex flex-row ...">
          <span class="self-center text-5xl font-bold text-textColor text-left m-8">
            Knight's ClassRoom
          </span>
          <div class="inline self-center text-xl font-bold text-textColor m-8">
            <button
              onClick={() => {
                setShowLoginDrawer(true);
                handleToggle();
              }}
              class="mr-4 font-bold"
            >
              Login
            </button>
            <button
              onClick={() => {
                setSignupDrawer(true);
                handleToggle();
              }}
              class="p-2 text-secondary rounded bg-primary hover:bg-opacity-95 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
            >
              Signup
            </button>
            <Backdrop
              className={classes.backdrop}
              open={open}
              onClick={handleClose}
            ></Backdrop>
            <SignupDrawer
              showDrawer={signupDrawer}
              closeDrawer={() => {
                setSignupDrawer(false);
                handleToggle();
              }}
            />
            <LoginDrawer
              showDrawer={showLoginDrawer}
              closeDrawer={() => {
                setShowLoginDrawer(false);
                handleToggle();
              }}
              loc={loc}
            />
          </div>
        </div>
        <div class="col-span-6 row-span-2 self-center text-left ml-8 mr-4  ...">
          <p class=" text-4xl font-bold text-textColor">
            Where teaching and learning come together.
          </p>
          <p class="mt-3 text-opacity-75 text-base text-black ">
            Knight's Classroom is your all-in-one place for teaching and
            learning. Our easy-to-use and secure tool helps educators manage,
            measure, and enrich learning experiences.
          </p>
        </div>
        <div class="col-span-6 flex justify-center row-span-2  ...">
          {/* <img class=" object-cover w-full " src={LandingImg} alt=""></img> */}
          <LoadingContainer animation={Student} width={500} height={250} />
        </div>
        <div class="row-span-3 col-span-3 p-4 ...">
          <LoadingContainer animation={All} width={150} height={150} />
          <p class="text-lg font-bold text-textColor">All-in-one place</p>
          <p class="text-opacity-75 mt-3">
            Bring all your learning tools together and manage multiple classes
            in one central destination.
          </p>
        </div>
        <div class="row-span-3 col-span-3 p-4 ...">
          <LoadingContainer animation={Easy} width={150} height={150} />
          <p class="text-lg font-bold text-textColor">Easy to use</p>
          <p class="text-opacity-75 mt-3">
            Anyone in your school community can get up and running with
            Classroom in minute
          </p>
        </div>
        <div class="row-span-3 col-span-3 p-4 ...">
          <LoadingContainer animation={Built} width={150} height={150} />
          <p class="text-lg font-bold text-textColor">
            Built for collaboration
          </p>
          <p class="text-opacity-75 mt-3">
            Work simultaneously in the same document with the whole class or
            connect face-to-face with Google Meet.
          </p>
        </div>
        <div class="row-span-3 col-span-3 mr-4 p-4  ...">
          <LoadingContainer animation={Access} width={150} height={150} />
          <p class="text-lg font-bold text-textColor">Access from anywhere</p>
          <p class="text-opacity-75 mt-3">
            Empower teaching and learning from anywhere, on any device, and give
            your class more flexibility and mobility.
          </p>
        </div>
      </div>
      {/* <LoadingContainer/> */}
      {/* <div className="LandingPageImageDiv"><img className="LandingPageImage" src={LandingImg} style={{height:"40%"}} alt=""/></div> */}
    </div>
  );
};

export default LandingPage;
