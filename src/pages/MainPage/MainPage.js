import React, { useEffect } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Assignments from "../Assignments/Assignments";
import { useDispatch } from "react-redux";
import Classes from "../Classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import Exams from "../Exams/Exams";
import LandingPage from "../LandingPage/LandingPage";
import { handleAuthChanges } from "../../redux/ActionCreator";

const MainPage = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("login_access_token");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (token != null)
      dispatch(handleAuthChanges({ prop: "user", value: user }));
  }, [token]);
//  useEffect(()=>{
//    if(token==null)window.location.reload();
//  },[])
  return (
    <div class="max-h-screen scrollbar-hide">
      {/* <Route path="*" component={SideBar} /> */}
      {/* <Dashboard /> */}
      <Switch>
        <Route path="/home" component={Dashboard} />
        <Route path="/classes" component={Classes} />
        <Route path="/assignments" component={Assignments} />
        <Route path="/exams" component={Exams} />
        <Route path="*" component={Classes} />
      </Switch>
    </div>
  );
};

export default MainPage;
