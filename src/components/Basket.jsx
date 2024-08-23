import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Basket(props) {
  const { selectedItems , handleRemoveItem} = props;

 
  return (
    <div>
      <div className={`bg-while w-[385px]  p-[25px]`}>
        <h1 className={`text-[20px] text-orange font-bold font-redhat`}>
          Your Cart (1)
        </h1>
        {selectedItems.map((item) => (
          <div key={item.id}
          className={`flex justify-between items-center pt-[20px] border-b-[1px] border-black pb-[20px]`}
        >
          <ul>
            <li>
              <h3>{item.name}</h3>
              <p className={`pt-[5px] flex gap-[15px]`}>
                {item.count}x <span>@${item.price.toFixed(2)}</span> <span>${(item.price * item.count).toFixed(2)}</span>
              </p>
            </li>
          </ul>
           <div className={`cursor-pointer`} onClick={() => handleRemoveItem(item.id)}>
            <HighlightOffIcon />
          </div>
        </div>
        ))}

        <div className={`flex justify-between pt-[15px] items-center`}>
          <h1>Order Total</h1>
          <h1 className={`font-bold text-[25px]`}>$47.00</h1>
        </div>

        <div className={`flex flex-col gap-[20px] pt-[30px]`}>
          <button
            className={`w-[340px] h-[50px] bg-cream rounded-lg flex justify-center items-center gap-[10px]`}
          >
            <img
              src="/assets/images/carbonNeutral.svg"
              alt="waffle"
              className={`w-[20px] h-[20px] `}
            />
            <p>
              This is a{" "}
              <span className={`font-semibold`}> carbon-neutral </span>
              delivery
            </p>
          </button>
          <button
            className={`w-[340px] h-[50px] bg-orange text-while rounded-full hover:bg-brown`}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
