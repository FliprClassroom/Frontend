import React, { useEffect } from "react";
import ClassCard from "../../components/Class/ClassCard";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/loader/loader";
import { fetchClasses } from "../../redux/ActionCreator";

const Classes = () => {
  const Colors = [
    "#FFA067",
    "#1CB892",
    "#E15B64",
    "#4E64D9",
    "#AD4ED9",
    "#D94E88",
    "#519DE2",
    "#F07A69",
  ];
  const arr = [
    {
      id: 1,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      meet_link: "https://apps.google.com/intl/en/meet/",
      test: "test 1",
    },
    {
      id: 2,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 3,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 4,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 5,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 6,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 7,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 18,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 8,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 10,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 15,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 45,
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
    {
      id: 1125,
      name: "Computer Scienceasdasdadsasdasasda",
      tname: "Computer Sciencesadasdasdasdasdasdadasdasdadada",
      assignment: "assignment 1",
      test: "test 1",
    },
  ];

  const dispatch = useDispatch();

  const classes = useSelector((state) => state.classes.classes);
  const isClassLoading = useSelector((state) => state.classes.isClassLoading);
  const _user = localStorage.getItem("user");

  let User = JSON.parse(_user);

  // console.log(User, "user");

  // console.log(classes, "class");

  // console.log(isClassLoading, "loading");

  useEffect(() => {
    dispatch(fetchClasses({ user: User.id }));
  }, []);

  const subs = classes?.map((ele) => (
    <ClassCard
      id={ele?.id}
      col={Colors[ele.id % 8]}
      name={ele?.name}
      tname={ele?.tname}
      meet={ele?.meet_link}
      assignment={ele?.assignment}
      test={ele?.test}
    />
  ));

  return isClassLoading ? (
    <Loader />
  ) : (
    <div class="flex flex-row flex-wrap pt-8 p-4 max-h-screen overflow-scroll scrollbar-hide">
      {subs}
    </div>
  );
};

export default Classes;
