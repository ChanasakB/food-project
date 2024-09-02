import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ModelCart from "./ModelCart";

function Basket(props) {
  const { selectedItems, handleRemoveItem, setSelectedItems } = props;

  const  totalPrice = selectedItems.reduce((acc, item) =>{
    return acc + item.price * item.count;
  },0); 
  console.log(totalPrice);

  const allCount = selectedItems.reduce((acc , item) => {
    return acc + item.count;
  }, 0);

  return (
    <div>
      <div className={`bg-while w-[385px]  p-[25px]`}>
        <h1 className={`text-[20px] text-orange font-bold font-redhat`}>
          Your Cart ({allCount})
        </h1>
        {selectedItems.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between items-center py-[20px] border-b-[1px] border-black`}
          >
            <ul>
              <li>
                <h3>{item.name}</h3>
                <p className={`pt-[5px] flex gap-[15px]`}>
                  {item.count}x <span>@${item.price?.toFixed(2)}</span>{" "}
                  <span>${(item.price * item.count)?.toFixed(2)}</span>
                </p>
              </li>
            </ul>
            <div
              className={`cursor-pointer`}
              onClick={() => handleRemoveItem(item.id)}
            >
              <HighlightOffIcon />
            </div>
          </div>
        ))}

        <div className={`flex justify-between pt-[15px] items-center`}>
          <h1>Order Total</h1>
          <h1 className={`font-bold text-[25px]`}>${totalPrice.toFixed(2)}</h1>
        </div>
        <ModelCart selectedItems={selectedItems} totalPrice={totalPrice} setSelectedItems={setSelectedItems}/>
      </div>
    </div>
  );
}
export default Basket;