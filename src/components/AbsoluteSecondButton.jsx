import DeleteIcon from "./icon/DeleteIcon";
import PlusIcon from "./icon/PlusIcon";


function AbsoluteSecondButton(props) {
  const { handleDecrement, handleIncrement, count } = props;

  return (
    <button
      className={`absolute  flex items-center justify-around  px-[10px] gap-[10px] rounded-full w-[160px] h-[40px] bottom-[-1rem] left-1/2 transform -translate-x-1/2 border border-gray bg-orange `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleDecrement();
        }}
      >
        <div className={`flex items-center justify-center w-[23px] h-[23px] rounded-full border border-while hover:bg-while hover:border-none`}>
        <DeleteIcon />
        </div>
      </div>
      <span className={`text-[14px] font-semibold text-while`}>{count}</span>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleIncrement();
        }}
      >
        <div className={`flex items-center justify-center w-[23px] h-[23px] rounded-full border border-while hover:bg-while hover:border-none`}>
        <PlusIcon />
        </div>
        
      </div>
    </button>
  );
}
export default AbsoluteSecondButton;