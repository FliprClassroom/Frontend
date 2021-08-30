import React from "react";
import ClassCard from "../../components/Class/ClassCard";

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
      name: "Computer Science",
      tname: "Computer Science",
      assignment: "assignment 1",
      test: "test 1",
    },
  ];

  const subs = arr.map((ele) => (
    <ClassCard
      id={ele.id}
      col={Colors[ele.id % 8]}
      name={ele.name}
      tname={ele.tname}
      assignment={ele.assignment}
      test={ele.test}
    />
  ));

  return (
    <div class="flex flex-row flex-wrap pt-8 p-4 max-h-screen overflow-scroll scrollbar-hide">
      {subs}
    </div>
  );
};

export default Classes;
