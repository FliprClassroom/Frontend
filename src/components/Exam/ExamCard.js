import React from "react";

const ExamCard = (props) => {
  
  return (
    <div class=" m-2 h-64 w-72 text-left border-primary border-1 text-textColor rounded-md shadow-lgPrimary cursor-pointer">
      <div
        class="text-secondary p-4 rounded-t-md"
        style={{ background: `${props.col}` }}
      >
        <p class="text-2xl font-bold truncate">
          {props.id}&nbsp;{props.name}
        </p>
        <p class="truncate">{props.tname}</p>
      </div>
      <div class="p-4">
        {true ? <p class="text-xl mb-2 font-semibold">Upcoming Events :</p> : ""}
        <p>{props.assignment}</p>
        <p>{props.test}</p>
      </div>
    </div>
  );
};

export default ExamCard;
