import formatCurrency from "@/utils/formatCurrency";
import formatDate from "@/utils/formatDate";
import { TbCategoryPlus } from "react-icons/tb";

import {
  HeartIcon,
  ShoppingBagIcon,
  StarIcon,
} from "@heroicons/react/16/solid";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  eventName: string;
  image: string;
  categoryId: number;
  price: string;
  city: string;
  eventDate: string;
  categoryTitle: string;
}
const ProductCard = ({
  id,
  eventName,
  image,

  categoryId,
  price,
  city,
  eventDate,
  categoryTitle,
}: Props) => {
  const formattedDate = formatDate(new Date(eventDate));
  const notImage = "http://localhost:8000/events/null";

  return (
    <div
      id="carosel"
      className=" mb-6 mx-2 shadow-2xl product-card  bg-black rounded-md"
    >
      <Link href={`/events/${id}`}>
        <div className=" w-full h-[200px] relative overflow-hidden ">
          <Image
            src={image == notImage ? "/images/1.jpg" : image}
            alt={eventName}
            width={300}
            height={200}
            className="w-full h-[90%] md:h-[90%] object-cover rounded-t-md transition-transform duration-300 transform hover:scale-105 "
          />
        </div>
        <div className="mt-[1rem] w-[100%] md:w-[90%] pl-3">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-white opacity-70">
              <TbCategoryPlus />
              {categoryTitle}
            </p>
            <HeartIcon className="w-[1rem] h-[1rem] text-red-600" />
          </div>
          <h1 className="mt-[0.3rem] font-bold text-white opacity-85 text-[16px]">
            {eventName}
          </h1>
          <p className="text-[14px] text-white opacity-80 ">{city}</p>
          <div className="mt-[0.3rem] flex items-center ">
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
            <StarIcon className="w-[1rem] h-[1rem] text-yellow-400" />
          </div>
          <div className="mt-[0.3rem] flex items-center justify-between">
            <div className="flex items-center ">
              {/* <p className="text-[15px] line-through text-white opacity-60">
                {discountPrice}
              </p> */}
              <p className="text-[16px] text-white opacity-75">
                {formatCurrency(parseFloat(price))}
              </p>
            </div>
            <ShoppingBagIcon className="w-[1.2rem] h-[1.2rem] text-orange-400" />
          </div>
          <p className="text-[12px] text-white opacity-80">{formattedDate}</p>
        </div>
        <div className="flex flex-col items-center justify-center pb-2">
          <button className="mt-5 cursor-pointer bg-red-600 px-10 py-2 text-white hover:bg-orange-700 rounded-md">
            Get Now!
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
