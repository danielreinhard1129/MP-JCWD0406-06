import React from "react";
import NewsCard from "./helper/NewsCard";

const NewsEvent = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-700">
      <h1 className="w-[80%] mx-auto md:text-[50px] text-[40px] lg:text-[60px] semi  text-white border-b-2 border-orange-500 pb-2 ">
        Coming Soon
      </h1>
      <br />
      <div className="mt-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto">
          {/* news Card */}
          <NewsCard image="/images/formula.jpg" title="New Update News" />
          <NewsCard image="/images/nikah.jpg" title="Check whats new" />
          <NewsCard image="/images/nascar.jpg" title="New Event" />
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
