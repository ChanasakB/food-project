import { useState  } from 'react'
import './App.css'
import Menu from './components/Menu'
import Basket from './components/Basket'

function App() {

  const [selectedItems, setSelectedItems] = useState([]);
  const [count, setCount] = useState(0);
  const [countForButton, setCountForButton] = useState(0);

  const handleRemoveItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    setSelectedItems(updatedItems);
  };

  return (
    <div className={`w-[1440px] bg-cream m-auto px-[111px] flex pt-[95px] gap-[30px]`}>
     <Menu selectedItems={selectedItems} setSelectedItems={setSelectedItems} count={count} setCount={setCount} setCountForButton={setCountForButton} countForButton={countForButton}/>
     <Basket selectedItems={selectedItems} handleRemoveItem={handleRemoveItem}/>
    </div>
  )
}

export default App;
