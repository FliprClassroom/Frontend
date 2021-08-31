import React, { useEffect } from "react";
import ExamCard from "../../components/Exam/ExamCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchTests } from "../../redux/ActionCreator";
import Loader from "../../components/loader/loader";
const Exams = () => {
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
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
    {
      name: "Exam 1",
      subjectName: "Computer Science",
      tName: "Shubham Sinha",
      dueDate: "13-09-2021",
    },
  ];

  const dispatch = useDispatch();

  const exams = useSelector((state) => state.classes.exams);
  const isClassLoading = useSelector((state) => state.classes.isClassLoading);
  const _user = localStorage.getItem("user");

  let User = JSON.parse(_user);

  useEffect(() => {
    dispatch(fetchTests({ user: User.id }));
  }, []);

  let i = 0;

  const subs = exams.map((ele) => {
    i++;
    return (
      <ExamCard
        id={ele?.id}
        col={Colors[i % 8]}
        name={ele?.title}
        tname={ele?.teacher_name}
        subjectName={ele?.subject}
        dueDate={ele?.duedate}
      />
    );
  });

  return isClassLoading ? (
    <Loader />
  ) : (
    <div class="flex flex-row flex-wrap pt-8 p-4 max-h-screen overflow-scroll scrollbar-hide">
      {subs}
    </div>
  );
};

export default Exams;
