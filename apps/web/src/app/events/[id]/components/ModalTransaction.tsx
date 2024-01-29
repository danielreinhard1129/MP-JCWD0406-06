// ModalTransaction.tsx

import React, { useState } from "react";

interface ModalTransactionProps {
  closeModal: () => void;
}

const ModalTransaction: React.FC<ModalTransactionProps> = ({ closeModal }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleUseVoucher = () => {
    // Your voucher logic here
    setQuantity(quantity - 10);
  };

  const calculateTotal = () => {
    const price = 100; // Replace this with the actual price
    return price * quantity;
    // Your total calculation logic here
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-[30%]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-slate-900 outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Your Transaction</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className=" bg-black p-8 rounded-md shadow-md">
                {/* Content of the modal */}
                <div className="flex items-center mb-4">
                  <h1 className="mr-2">Qty</h1>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
                <h1 className="font-bold">Use Reward</h1>
                <div className="flex-col mb-2">
                  {/* Add your voucher button here */}
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={handleUseVoucher}
                  >
                    Use Voucher
                  </button>
                </div>
                <p className="text-lg mt-4">Total: {calculateTotal()}</p>
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalTransaction;
