import { CalendarDaysIcon, TagIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import ButtonComp from "../ButtonComp";

interface Props {
  image: string;
  title: string;
}

const NewsCard = ({ image, title }: Props) => {
  return (
    <>
      <div className="col-span-2  shadow-md">
        <Image
          className="w-[100%] md:w-[100%] h-[100%] sm:h-[70%] rounded-md  shadow-lg"
          src={`${image}`}
          alt={title}
          width={300}
          height={200}
        />
      </div>
      <div className="col-span-4">
        <h1 className="text-[22px] mb-[1rem] text-orange-500 capitalize ">
          {title}
        </h1>
        <div className="flex mb-[0.4rem] items-center space-x-2">
          <CalendarDaysIcon className="w-[1.5rem] h-[1.5rem] text-white opacity-85" />
          <p className="  text-black opacity-95  text-[17px] font-semibold">
            February 14,2024
          </p>
        </div>
        <div className="flex mb-[0.4rem] items-center space-x-2">
          <TagIcon className="w-[1rem] h-[1rem] text-white opacity-90" />
          <p className=" text-gray-400 opacity-85 font-thin text-[14px]">
            Ceramah Ustad Hanan Attaki.lc
          </p>
        </div>
        <div className="text-white mb-[1rem]">
          Dalam acara yang penuh makna dan kebijaksanaan, Ustad Hanan Attaki
          akan menyelenggarakan ceramah eksklusif yang menawarkan pencerahan
          rohani dan pandangan mendalam terhadap kehidupan sehari-hari. Dengan
          keahlian dan wawasan yang luar biasa, Ustad Hanan Attaki akan mengupas
          beragam topik, mulai dari nilai-nilai keislaman, etika sosial, hingga
          rahasia kebahagiaan dalam menjalani perjalanan kehidupan. Acara ini
          merupakan kesempatan langka untuk mendengarkan nasihat bijak dari
          seorang ulama
        </div>
        <div className=" mt-2">
          <ButtonComp />
        </div>
      </div>
    </>
  );
};

export default NewsCard;
