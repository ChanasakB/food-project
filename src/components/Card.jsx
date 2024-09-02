import { useEffect, useState } from "react";
import AbsoluteFirstButton from "./AbsoluteFirstButton";
import AbsoluteSecondButton from "./AbsoluteSecondButton";

function Card(props) {
  const { originData, actionButton, selectedItems } = props;
  const { onRemoveFromCart, onAddToCart } = actionButton;
  const { id, img, name, details, price } = originData;

  const [itemByIdState, setItemByIdState] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const findItem = selectedItems.find((ele) => ele.id === id);
    setItemByIdState(findItem);
    if (!findItem) {
      setIsOpen(false);
    }
  }, [id, selectedItems, setItemByIdState]);

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
          handleDecrement={() => onRemoveFromCart(originData)}
          handleIncrement={() => onAddToCart(originData)}
          count={itemByIdState ? itemByIdState.count : 0}
          />
        ) : (
          <AbsoluteFirstButton handleIsOpen={() => setIsOpen(!isOpen)} />
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
