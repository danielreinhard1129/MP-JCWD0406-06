// CardBuyTicket.tsx

import formatCurrency from "@/utils/formatCurrency";
import React, { useState } from "react";
import ModalTransaction from "./ModalTransaction";

interface CardBuyTicketProps {
  price: number;
}

const CardBuyTicket: React.FC<CardBuyTicketProps> = ({ price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetTicketClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="col-span-1 pt-10">
      <div className="bg-white p-4 rounded-lg sticky top-0 shadow-md">
        <div className="mb-4">
          <label
            htmlFor="harga"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Harga Tiket
          </label>
          <div className="w-full border text-gray-800 p-2 rounded">
            From {formatCurrency(price)}
          </div>
        </div>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGetTicketClick}
        >
          Get Ticket
        </button>
      </div>

      {isModalOpen && (
        <ModalTransaction closeModal={() => setIsModalOpen(false)}>
          {/* Additional content for the modal, if needed */}
        </ModalTransaction>
      )}
    </div>
  );
};

export default CardBuyTicket;
