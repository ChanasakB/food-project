import "./App.css";
import Basket from "./components/Basket";
import Menu from "./components/Menu";
import useLocalStorage from "./useLocalStorage";


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
  const [selectedItems, setSelectedItems] = useLocalStorage('menu',[]);

  const handleRemoveItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    setSelectedItems(updatedItems);
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
 

  return (
    <div className={`bg-cream`}>
      <div
      className={`w-[1440px] bg-cream m-auto px-[111px] flex pt-[95px] gap-[30px]`}
    >
      <Menu
        dataMock={dataMock}
        handleRemoveItem={handleRemoveItem}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <Basket
        selectedItems={selectedItems}
        handleRemoveItem={handleRemoveItem}
        setSelectedItems={setSelectedItems}
      />
    </div>
    </div>
  );
}

export default App;