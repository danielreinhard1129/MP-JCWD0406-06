"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

const SliderBanner = () => {
  const slides = [
    {
      url:
        "https://images.pexels.com/photos/10010406/pexels-photo-10010406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url:
        "https://images.pexels.com/photos/4456/people-jogger-jogging-colors.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url:
        "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url:
        "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" bg-gray-800   w-full">
      <div className=" bg-gray-600 md:p-0  container mx-auto w-full h-[550px]  md:h-[800px] ">
        <div className="  h-[600px] w-full m-auto py-3 px-4 relative group object-cover ">
          <div className=" border  p-3 bg-black rounded-lg md:max-w-[40%]  mx-auto py-4">
            <h1 className="text-orange-600 text-xl md:text-4xl text-center  cursor-pointer hover:text-orange-500 transition duration-300 ">
              Get Your Experience with We
            </h1>
          </div>

          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className=" w-full h-[60%] md:h-[100%] rounded-2xl bg-center bg-cover object-contain duration-500 mt-2"
          ></div>
          {/* left Arrow */}
          <div className=" hidden group-hover:block absolute top-[50%] md:top-[60%]  -translate-x-0 translate-y-[-50%] left-[5vw]  text-2xl rounded-full p-2 bg-white/20 text-black cursor-pointer">
            <FaArrowLeft onClick={prevSlide} size={30} />
          </div>
          {/* right Arrow */}
          <div className=" hidden group-hover:block absolute top-[50%] md:top-[60%] -translate-x-0 translate-y-[-50%] right-[5vw] text-2xl rounded-full p-2 bg-white/20 text-black cursor-pointer">
            <FaArrowRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className=" text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
