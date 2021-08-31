import React, { useState } from "react";
import ClassIcon from "@material-ui/icons/Class";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import Classes from "../Classes/Classes";
import { Link } from "react-router-dom";
import CreateNewClass from "../NewClass/CreateNewClass";

const SideBar = () => {
  const location = useLocation().pathname;
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);
  const [openModal, setOpenModal] = useState(false);
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
              <div class="text-lg pb-2 pt-2 bg-secondary text-textColor scale-110">
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
              <div class="text-lg pb-2 pt-2 bg-secondary text-textColor scale-110">
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
              <div class="text-lg pb-2 pt-2 bg-secondary text-textColor scale-110">
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
            &nbsp;&nbsp;&nbsp;{user?.username}
          </span>
          <span
            onClick={() => {
              localStorage.clear();
              history.push("/login");
            }}
            class="mb-2 mt-2 pl-5 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none"
          >
            <ExitToAppIcon style={{ alignSelf: "center" }} />
            &nbsp;&nbsp;&nbsp;Logout
          </span>
        </div>
        <div class="mt-16 flex flex-col" onClick={() => setOpenModal(true)}>
          <span class="mb-2 mt-2 pl-5 text-xl hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none">
            <AddBoxIcon style={{ fontSize: "1.8rem" }} />
            &nbsp;&nbsp;&nbsp;
            {user?.is_staff ? "Create a new Class" : "Join a new Class"}
          </span>
        </div>
        {user?.is_staff ? (
          <CreateNewClass
            openUpgrade={openModal}
            setOpenUpgrade={() => setOpenModal(!openModal)}
          />
        ) : (
          <CreateNewClass
            openUpgrade={openModal}
            setOpenUpgrade={() => setOpenModal(!openModal)}
          />
        )}
      </div>
    </div>
  );
};

export default SideBar;
