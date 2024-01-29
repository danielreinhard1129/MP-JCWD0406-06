import React from "react";
import FeaturedProductSlider from "./helper/FeaturedProductSlider";
import Link from "next/link";

const TopProduct = () => {
  return (
    <div className="bg-gray-800 pt-[4rem] pb-[3rem]">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className=" w-[80%] mx-auto md:text-[50px] text-[40px] lg:text-[60px] font-semibold  text-white border-b-2 border-orange-500 pb-2 ">
          Top Events
        </h1>
        <br />

        <Link href="/event">
          <button className="  cursor-pointer uppercase text-[13px] md:text-[15px] text-yellow-400">
            View All Events
          </button>
        </Link>
      </div>
      <div className=" w-[80%] mt-[2rem] mx-auto">
        <FeaturedProductSlider />
      </div>
    </div>
  );
};

export default TopProduct;
