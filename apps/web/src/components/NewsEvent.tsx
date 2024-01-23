import React from "react";
import NewsCard from "./helper/NewsCard";

const NewsEvent = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-800">
      <h1 className="w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white ">
        Coming Soon
      </h1>
      <div className="mt-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto">
          {/* news Card */}
          <NewsCard image="/images/products/p2.jpg" title="New Update News" />
          <NewsCard image="/images/products/p2.jpg" title="Check whats new" />
          <NewsCard image="/images/products/p2.jpg" title="New Event" />
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
