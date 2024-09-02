import Card from "./Card";

function Menu(props) {
  const {
    dataMock,
    selectedItems,
    setSelectedItems,
    onAddToCart,
    onRemoveFromCart,
  } = props;

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
              originData={items}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              actionButton={{
                onAddToCart,
                onRemoveFromCart,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Menu;