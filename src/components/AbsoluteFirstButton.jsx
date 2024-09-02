import React from "react";


function AbsoluteFirstButton(props) {
    const { handleIsOpen } = props
  return (
    <button
      className={`absolute  flex items-center justify-center gap-[10px] rounded-full w-[160px] h-[40px] bottom-[-1rem] left-1/2 transform -translate-x-1/2 border border-gray bg-while `}
      onClick={handleIsOpen}
    >
      <img
        src="/assets/images/addCart.svg"
        alt="waffle"
        className={`w-[20px] h-[20px] `}
      />
      <span className={`text-[14px] font-semibold`}>Add to Cart</span>
    </button>
  );
}

export default AbsoluteFirstButton;
