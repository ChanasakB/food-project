import { useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Menu from "./components/Menu";

const dataMock = [
  {
    id: 1,
    name: "Waffle",
    details: "Waffle with Berries",
    img: "/assets/images/waffle.jpg",
    price: 6.5,
    count: 0,
  },
  {
    id: 2,
    name: "Creme Brulee",
    details: "Vanilla Bean Creme Brulee",
    img: "/assets/images/creme-brulee.jpg",
    price: 7.0,
    count: 0,
  },
  {
    id: 3,
    name: "Macaron",
    details: "Macaron Mix of Five",
    img: "/assets/images/macaron.jpg",
    price: 8.0,
    count: 0,
  },
  {
    id: 4,
    name: "Tiramisu",
    details: "Classic Tiramisu",
    img: "/assets/images/tiramisu.jpg",
    price: 5.5,
    count: 0,
  },
  {
    id: 5,
    name: "Baklava",
    details: "Pistachio Baklava",
    img: "/assets/images/baklava.jpg",
    price: 4.0,
    count: 0,
  },
  {
    id: 6,
    name: "Pie",
    details: "Lemon Meringue Pie",
    img: "/assets/images/meringue.jpg",
    price: 5.0,
    count: 0,
  },
  {
    id: 7,
    name: "Cake",
    details: "Red Velvet Cake",
    img: "/assets/images/cake.jpg",
    price: 4.5,
    count: 0,
  },
  {
    id: 8,
    name: "Brownie",
    details: "Salted Caramel Brownie",
    img: "/assets/images/brownie.jpg",
    price: 5.5,
    count: 0,
  },
  {
    id: 9,
    name: "Panna Cotta",
    details: "Vanilla Panna Cotta",
    img: "/assets/images/panna-cotta.jpg",
    price: 6.5,
    count: 0,
  },
];

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [countForButton, setCountForButton] = useState(0);

  const handleRemoveItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    setSelectedItems(updatedItems);
  };

  return (
    <div
      className={`w-[1440px] bg-cream m-auto px-[111px] flex pt-[95px] gap-[30px]`}
    >
      <Menu
        dataMock={dataMock}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        setCountForButton={setCountForButton}
        countForButton={countForButton}
        handleRemoveItem={handleRemoveItem}
      />
      <Basket
        selectedItems={selectedItems}
        handleRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;
