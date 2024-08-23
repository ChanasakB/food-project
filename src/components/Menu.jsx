import React from "react";
import { useState, useEffect } from "react";
import AbsoluteFirstButton from "./AbsoluteFirstButton";
import AbsoluteSecondButton from "./AbsoluteSecondButton";

function Menu(props) {
  const { selectedItems, setSelectedItems, count, setCount } = props;
  const [data, setData] = useState([
    {
      id: 1,
      name: "Waffle",
      details: "Waffle with Berries",
      img: "/assets/images/waffle.jpg",
      price: 6.5,
      count: 1,
    },
    {
      id: 2,
      name: "Creme Brulee",
      details: "Vanilla Bean Creme Brulee",
      img: "/assets/images/creme-brulee.jpg",
      price: 7.0,
      count: 1,
    },
    {
      id: 3,
      name: "Macaron",
      details: "Macaron Mix of Five",
      img: "/assets/images/macaron.jpg",
      price: 8.0,
      count: 1,
    },
    {
      id: 4,
      name: "Tiramisu",
      details: "Classic Tiramisu",
      img: "/assets/images/tiramisu.jpg",
      price: 5.5,
      count: 1,
    },
    {
      id: 5,
      name: "Baklava",
      details: "Pistachio Baklava",
      img: "/assets/images/baklava.jpg",
      price: 4.0,
      count: 1,
    },
    {
      id: 6,
      name: "Pie",
      details: "Lemon Meringue Pie",
      img: "/assets/images/meringue.jpg",
      price: 5.0,
      count: 1,
    },
    {
      id: 7,
      name: "Cake",
      details: "Red Velvet Cake",
      img: "/assets/images/cake.jpg",
      price: 4.5,
      count: 1,
    },
    {
      id: 8,
      name: "Brownie",
      details: "Salted Caramel Brownie",
      img: "/assets/images/brownie.jpg",
      price: 5.5,
      count: 1,
    },
    {
      id: 9,
      name: "Panna Cotta",
      details: "Vanilla Panna Cotta",
      img: "/assets/images/panna-cotta.jpg",
      price: 6.5,
      count: 1,
    },
  ]);
  const [selectedId, setSelectedId] = useState(0);

  const handleOpen = (itemId) => {
    setSelectedId(itemId);
  };

  const onAddToCart = (item) => {
    const newSelected = [...selectedItems];
    const addUpdateItem = newSelected.find((ele) => ele.id === item.id);
    if (addUpdateItem) {
      addUpdateItem.count++;
      setSelectedItems(newSelected);
    } else {
      setSelectedItems([...selectedItems, { ...item, count: 1 }]);
    }
  };

  const onRemoveFromCart = (item) => {
    const oldSelected = [...selectedItems];
    const removeUpdateItem = oldSelected.findIndex((ele) => ele.id === item.id);
    if (removeUpdateItem !== -1) {
      if (oldSelected[removeUpdateItem].count > 1) {
        oldSelected[removeUpdateItem].count--;
      } else {
        oldSelected.splice(removeUpdateItem, 1);
      }
      setSelectedItems(oldSelected);
    }
  };

  const handleIncrement = (item) => {
    onAddToCart(item);
    setCount(count + 1);
  };

  const handleDecrement = (item) => {
    onRemoveFromCart(item);
    setCount(Math.max(count - 1, 0));
  };


  const handleCount = () => {
    setSelectedId(0);
  };
  useEffect(() => {
    if (selectedId !== 0) {
      setCount(0);
    }
  }, [selectedId]);

  return (
    <div>
      <h1 className={`font-redhat font-bold text-[35px] pb-[40px]`}>
        Desserts
      </h1>
      <div className={`flex flex-wrap w-[800px] justify-between gap-[10px]`}>
        {data.map((items) => (
          <div key={items.id} className={`flex flex-col`}>
            <div className="relative w-[250px]" key={items.id}>
              <img
                src={items.img}
                alt={items.name}
                className={`w-[250px] h-[240px] bg-red rounded-xl `}
              />
              {items.id === selectedId ? (
                <AbsoluteSecondButton
                  handleCount={handleCount}
                  handleDecrement={() => handleDecrement(items)}
                  handleIncrement={() => handleIncrement(items)}
                  selectedItems={selectedItems.count}
                  count={count}
                />
              ) : (
                <AbsoluteFirstButton handleOpen={() => handleOpen(items.id)} />
              )}
              {/* {isOpen ? <AbsoluteSecondButton /> : <AbsoluteFirstButton handleOpen={() => handleOpen(items.id)}/>} */}
            </div>
            <div
              className={`w-[250px] py-[20px] flex flex-col justify-between`}
            >
              <h1 className={`text-brown text-[14px]`}>{items.name}</h1>
              <h2 className={`font-semibold text-[16px]`}>{items.details}</h2>
              <p className={`text-orange font-semibold text-[16px] `}>
                $<span>{items.price.toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
