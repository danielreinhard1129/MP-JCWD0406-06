import React from "react";
import AllEvent from "./component/AllEvent";
import Banner from "@/components/Banner";
import SliderBanner from "@/components/Banner";

const TopProduct = () => {
  return (
    <div className="bg-gray-800 pt-[4rem] pb-[3rem]">
      <SliderBanner />
      <div className="w-[80%] mx-auto flex flex-col items-center justify-between pt-4">
        <h1 className=" md:text-[40px] text-[25px] lg:text-[50px] text-white text-center">
          All Event
        </h1>
        <button className="uppercase text-[13px] md:text-[15px] text-yellow-400">
          Yuk Check Out
        </button>
        <h2
          className="uppercase text-[13px] md:text-[15px] text-orange-500"
          style={{ borderBottom: "2px solid orange", width: "100%" }}
        >
          Silahkan Chek-out kak yang mana kita pilih!
        </h2>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto flex flex-wrap gap-6">
        {/* Wrap each AllEvent card with a container div */}
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
          <AllEvent />
        </div>
        {/* Add more divs for additional AllEvent components */}
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
          <AllEvent />
        </div>
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
          <AllEvent />
        </div>
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
          <AllEvent />
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
