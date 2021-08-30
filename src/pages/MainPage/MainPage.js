import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import Assignments from "../Assignments/Assignments";
import Classes from "../Classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import Exams from "../Exam/Exam";
import LandingPage from "../LandingPage/LandingPage";

const MainPage = () => {
  return (
    <div class="max-h-screen scrollbar-hide">
      {/* <Route path="*" component={SideBar} /> */}
      {/* <Dashboard /> */}
      <Route path="/home" component={Dashboard} />
      <Route path="/classes" component={Classes} />
      <Route path="/assignments" component={Assignments} />
      <Route path="/exams" component={Exams} />
    </div>
  );
};

export default MainPage;
