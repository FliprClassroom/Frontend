import React, { useState } from "react";
import ClassIcon from "@material-ui/icons/Class";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Classes from "../Classes/Classes";
import { Link, Route } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
const Dashboard = () => {
  const [routes, setRoutes] = useState({
    class: false,
    assignment: false,
    test: false,
  });

  return (
    <div class=" h-screen cursor-default">
      {/* <div class="col-span-2 row-span-6 pt-6 items-start text-secondary text-left bg-primary ">
        <span class="self-center text-2xl pl-5 opacity-90 font-bold text-left  ">
          Flipr ClassRoom
        </span>
        <div class="pt-6 opacity-80">
          <hr />
        </div>
        <div class="mt-8 flex flex-col">
          <Link to="/classes">
            {routes.class?<span class="mb-2 mt-2 pl-5 text-lg bg-secondary text-textColor scale-110">
              <ClassIcon style={{ alignSelf: "center" }} />
              &nbsp;&nbsp;&nbsp;Classes
            </span>:<span onClick={()=>setRoutes({...routes,class:true})} class=" w-full mb-2 mt-2 pl-5 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none">
              <ClassIcon style={{ alignSelf: "center" }} />
              &nbsp;&nbsp;&nbsp;Classes
            </span>}
          </Link>

          <span class="mb-2 mt-2 pl-5 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none">
            <AssignmentIcon style={{ alignSelf: "center" }} />
            &nbsp;&nbsp;&nbsp;Assignments
          </span>
          <span class="mb-2 mt-2 pl-5 text-lg hover:bg-secondary hover:text-textColor transform ease-in-out duration-300 hover:scale-110 motion-reduce:transform-none">
            <MenuBookIcon style={{ alignSelf: "center" }} />
            &nbsp;&nbsp;&nbsp;Exam
          </span>
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
      </div> */}
      {/* <SideBar/> */}
      {/* <Route path="*" component={SideBar}/> */}
      <div class="mt-8">Go to Classes to see All Classes</div>
    </div>
  );
};

export default Dashboard;
