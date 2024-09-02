import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import Comfirmed from "./icon/Comfirmed";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  overflowY: 'auto',
  height: '80%',
  '&::-webkit-scrollbar': {
          width: '8px', 
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1', 
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888', 
          borderRadius: '10px', 
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555', 
        },
        border: '3px solid transparent', 
        boxSizing: 'border-box',
};

function ModelCart(props) {
  const { selectedItems, totalPrice, setSelectedItems } = props;
  const [isOpenModel, setIsOpenModel] = useState(false);
  const handleOpen = () => setIsOpenModel(true);
  const handleClose = () => setIsOpenModel(false);
  const handleReset = () => {
    setSelectedItems([]);
    setIsOpenModel(false)};

  return (
    <div>
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
            This is a <span className={`font-semibold`}> carbon-neutral </span>
            delivery
          </p>
        </button>
        <button
          onClick={handleOpen}
          className={`w-[340px] h-[50px] bg-orange text-while rounded-full hover:bg-brown`}
        >
          Confirm Order
        </button>
        <Modal open={isOpenModel} onClose={handleClose}>
          <Box sx={style}>
            <div
              className={`w-[594px] bg-while py-[40px] px-[40px]`}
            >
              <div>
                <Comfirmed />
              </div>
              <div className={`pt-[10px]`}>
                <h1 className={`font-bold text-[40px]`}>Order Confirmed</h1>
                <h2 className={`font-medium  text-gray`}>
                  We hope you enjoy your food!
                </h2>
              </div>
              <div className={`py-[25px]`}>
                {selectedItems.map((item) => (
                  <div key={item.id}
                    className={`w-[510px] h-[85px] bg-cream m-auto p-[20px]`}
                  >
                    <div
                      className={`flex justify-between items-center border-b-[1px] border-b-gray pb-[14px]`}
                    >
                      <div className={`flex gap-[20px] items-center`}>
                        <img
                          src={item.img}
                          alt={item.name}
                          className={`w-[50px] h-[50px] rounded-lg`}
                        />
                        <div className={`flex flex-col`}>
                          <h3 className={`font-bold`}>{item.name}</h3>
                          <p className={`flex gap-[15px] text-gray`}>
                            <span className={`text-orange`}>{item.count}x</span>
                            <span>
                              <span className={`text-[12px]`}>@</span> $
                              {item.price.toFixed(2)}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className={`font-bold`}>
                          ${(item.price * item.count)?.toFixed(2)}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={`w-[510px] h-[85px] bg-cream m-auto p-[20px]`}>
                  <div className={`flex justify-between items-center`}>
                    <h3 className={`font-medium`}>Order Total</h3>
                    <h2 className={`font-bold text-[25px]`}>
                      ${totalPrice.toFixed(2)}
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleReset}
                  className={`bg-orange w-[510px] h-[50px] rounded-full text-while`}
                >
                  Start New Order
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default ModelCart;
