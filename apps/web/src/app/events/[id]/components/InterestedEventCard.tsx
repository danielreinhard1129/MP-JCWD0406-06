import React from "react";

import Link from "next/link";
import FeaturedProductSlider from "@/components/helper/FeaturedProductSlider";

const InterestedEvent = () => {
  return (
    <section id="carosel" className=" bg-gray-900">
      <div className="pt-[3rem] pb-[3rem] ">
        <div className="w-[80%] mx-auto flex items-center justify-between">
          <h1 className="w-[80%] mx-auto md:text-[40px] text-[30px] lg:text-[50px] semi  text-white border-b-2 border-orange-500 pb-2 ">
            Anda Tertarik, <span className=" = text-yellow-300">Maybe? </span>
          </h1>
          <Link href="/event">
            <button className="  cursor-pointer uppercase text-[13px] md:text-[15px] text-yellow-400">
              View All Events
            </button>
          </Link>
        </div>
        <div className="w-[80%] mt-[2rem] mx-auto">
          {/* featured Product slider */}
          <FeaturedProductSlider />
        </div>
      </div>
    </section>
  );
};

export default InterestedEvent;
