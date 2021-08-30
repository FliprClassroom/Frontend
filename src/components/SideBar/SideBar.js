import React, { useState } from "react";
import ClassIcon from "@material-ui/icons/Class";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useLocation } from "react-router-dom";
// import Classes from "../Classes/Classes";
import { Link } from "react-router-dom";

const SideBar = () => {
  const location = useLocation().pathname;

  console.log(location, "hii");

  const routeType = {
    CLASS: "/classes",
    ASSIGNMENT: "/assignments",
    EXAM: "/exams",
    HOME: "/home",
  };
  return (
    <div class="h-screen cursor-default">
      <div class="h-screen pt-6 items-start text-secondary text-left bg-primary ">
        <Link to="/home">
          <span class="self-center text-2xl pl-5 opacity-90 font-bold text-left  ">
            Flipr ClassRoom
          </span>
        </Link>
        <div class="pt-6 opacity-80">
          <hr />
        </div>
        <div class="mt-8 flex flex-col">
          <Link
            to="/classes"
            class=" w-full mb-2 mt-2 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none"
          >
            {location === routeType.CLASS ? (
              <div class="text-lg bg-secondary text-textColor scale-110">
                <span class="pl-5">
                  <ClassIcon style={{ alignSelf: "center" }} />
                  &nbsp;&nbsp;&nbsp;Classes
                </span>
              </div>
            ) : (
              <span class="pl-5">
                <ClassIcon style={{ alignSelf: "center" }} />
                &nbsp;&nbsp;&nbsp;Classes
              </span>
            )}
          </Link>

          <Link
            to="/assignments"
            class=" w-full mb-2 mt-2 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none"
          >
            {location === routeType.ASSIGNMENT ? (
              <div class="text-lg bg-secondary text-textColor scale-110">
                <span class="pl-5">
                  <AssignmentIcon style={{ alignSelf: "center" }} />
                  &nbsp;&nbsp;&nbsp;Assignments
                </span>
              </div>
            ) : (
              <span class="pl-5">
                <AssignmentIcon style={{ alignSelf: "center" }} />
                &nbsp;&nbsp;&nbsp;Assignments
              </span>
            )}
          </Link>

          <Link
            to="/exams"
            class=" w-full mb-2 mt-2 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none"
          >
            {location === routeType.EXAM ? (
              <div class="text-lg bg-secondary text-textColor scale-110">
                <span class="pl-5">
                  <MenuBookIcon style={{ alignSelf: "center" }} />
                  &nbsp;&nbsp;&nbsp;Exam
                </span>
              </div>
            ) : (
              <span class="pl-5">
                <MenuBookIcon style={{ alignSelf: "center" }} />
                &nbsp;&nbsp;&nbsp;Exam
              </span>
            )}
          </Link>

          <span class="mb-2 mt-2 pl-5 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none">
            <CalendarTodayIcon style={{ alignSelf: "center" }} />
            &nbsp;&nbsp;&nbsp;Calendar
          </span>
        </div>
        <div class="mt-16 flex flex-col">
          <span class="mb-2 mt-2 pl-5 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none">
            <AccountCircleIcon style={{ alignSelf: "center" }} />
            &nbsp;&nbsp;&nbsp;Profile
          </span>
          <span class="mb-2 mt-2 pl-5 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none">
            <ExitToAppIcon style={{ alignSelf: "center" }} />
            &nbsp;&nbsp;&nbsp;Logout
          </span>
        </div>
        <div class="mt-16 flex flex-col">
          <span class="mb-2 mt-2 pl-5 text-xl hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none">
            <AddBoxIcon style={{ fontSize: "1.8rem" }} />
            &nbsp;&nbsp;&nbsp;Join a new Class
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
