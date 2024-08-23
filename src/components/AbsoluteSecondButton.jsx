import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";


function AbsoluteSecondButton(props) {
    const {handleCount , handleDecrement , handleIncrement , count } = props


  return (
    <button  onClick={handleCount}
      className={`absolute  flex items-center justify-around gap-[10px] rounded-full w-[160px] h-[40px] bottom-[-1rem] left-1/2 transform -translate-x-1/2 border border-gray bg-orange `}
    >
      <div onClick={(e) => {
          e.stopPropagation();
          handleDecrement(); 
        }}>
        <RemoveCircleOutlineIcon />
      </div>
      <span className={`text-[14px] font-semibold text-while`}>{count}</span>
      <div onClick={(e) => {
          e.stopPropagation();
          handleIncrement();
        }}>
        <ControlPointIcon />
      </div>
    </button>
  );
}

export default AbsoluteSecondButton;
