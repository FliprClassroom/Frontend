import React from "react";

const ClassCard = (props) => {
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
  return (
    <div class=" m-2 h-64 w-72 text-left border-primary border-1 text-textColor rounded-md shadow-lgPrimary">
      <div
        class="text-secondary p-4 rounded-md"
        style={{ background: `${props.col}` }}
      >
        <p>
          {props.id}&nbsp;{props.name}
        </p>
        <p>{props.tname}</p>
      </div>
      <div class="p-4">
        {true ? <p class="text-xl">Upcoming Events :</p> : ""}
        <p>{props.assignment}</p>
        <p>{props.test}</p>
      </div>
    </div>
  );
};

export default ClassCard;
