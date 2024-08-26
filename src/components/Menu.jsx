import { useState } from "react";
import Card from "./Card";

function Menu(props) {
  const { dataMock, selectedItems, setSelectedItems } = props;
  const [selectedId, setSelectedId] = useState(0);

  const handleOpen = (itemId, setIsOpen) => {
    // const isAlreadyAddItem = selectedItems.find()
    // if()
    setSelectedId(itemId);
    setIsOpen(true);
  };

  const handleCount = () => {
    setSelectedId(0);
  };

  const onAddToCart = (item) => {
    const newSelected = [...selectedItems];
    const addUpdateItem = newSelected.find((ele) => ele.id === item.id);
    if (addUpdateItem) {
      console.log("=======>>>", item.count);
      addUpdateItem.count = item.count;
      setSelectedItems(newSelected);
    } else {
      console.log("=======>>>1", item.count);

      setSelectedItems([...selectedItems, { ...item, count: 1 }]);
    }
  };

  const onRemoveFromCart = (item) => {
    const oldSelected = [...selectedItems];
    const removeUpdateItem = oldSelected.findIndex((ele) => ele.id === item.id);
    if (removeUpdateItem !== -1) {
      if (oldSelected[removeUpdateItem].count > 1) {
        oldSelected[removeUpdateItem].count = item.count;
      } else {
        oldSelected.splice(removeUpdateItem, 1);
      }
      setSelectedItems(oldSelected);
    }
  };

  const handleIncrement = (item) => {
    onAddToCart(item);
  };

  const handleDecrement = (item, setIsOpen) => {
    onRemoveFromCart(item);
    if (item.count === 0) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <h1 className={`font-redhat font-bold text-[35px] pb-[40px]`}>
        Desserts
      </h1>
      <div className={`flex flex-wrap w-[800px] justify-between gap-[10px]`}>
        {dataMock.map((items) => {
          return (
            <Card
              key={items.id}
              payload={items}
              actionButton={{
                handleCount,
                handleDecrement,
                handleIncrement,
                handleOpen,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
