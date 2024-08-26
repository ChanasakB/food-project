import { useState } from "react";
import AbsoluteFirstButton from "./AbsoluteFirstButton";
import AbsoluteSecondButton from "./AbsoluteSecondButton";

function Card(props) {
  const { payload, actionButton } = props;
  const { handleCount, handleDecrement, handleIncrement, handleOpen } =
    actionButton;
  const { id, img, name, details, price } = payload;

  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const leftButton = () => {
    if (count > 0) {
      const realCount = count - 1;
      setCount(realCount);
      handleDecrement({ ...payload, count: realCount }, setIsOpen);
    }
  };

  const rightButton = () => {
    if (count >= 0) {
      const realCount = count + 1;
      setCount(realCount);
      handleIncrement({ ...payload, count: realCount }, setIsOpen);
    }
  };

  return (
    <div className={`flex flex-col`}>
      <div className="relative w-[250px]">
        <img
          src={img}
          alt={name}
          className={`w-[250px] h-[240px] bg-red rounded-xl `}
        />
        {isOpen ? (
          <AbsoluteSecondButton
            handleCount={handleCount}
            handleDecrement={() => leftButton()}
            handleIncrement={() => rightButton()}
            count={count}
          />
        ) : (
          <AbsoluteFirstButton handleOpen={() => handleOpen(id, setIsOpen)} />
        )}
      </div>
      <div className={`w-[250px] py-[20px] flex flex-col justify-between`}>
        <h1 className={`text-brown text-[14px]`}>{name}</h1>
        <h2 className={`font-semibold text-[16px]`}>{details}</h2>
        <p className={`text-orange font-semibold text-[16px] `}>
          $<span>{price.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
