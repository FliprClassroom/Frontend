import React from 'react'
import AssignmentCard from '../../components/Assignment/AssignmentCard';

const Assignments = () => {
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
const arr=[{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"}, {name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},{name:"Assignment 1",subjectName:"Computer Science",tName:"Shubham Sinha",dueDate:"13-09-2021"},];
let i=0;

const subs = arr.map((ele) => {
    i++;
    return <AssignmentCard
      col={Colors[i % 8]}
      name={ele.name}
      tname={ele.tname}
      assignment={ele.assignment}
      test={ele.test}
    />
});

  return (
    <div class="flex flex-row flex-wrap pt-8 p-4 max-h-screen overflow-scroll scrollbar-hide">
      {subs}
    </div>
  );
}

export default Assignments;
