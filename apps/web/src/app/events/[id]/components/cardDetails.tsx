import Image from "next/image";
import React from "react";

const CardDetail = () => {
  return (
    <div className="container mx-auto max-w-6xl pt-10 px-4 text-white opacity-">
      <div className=" h-auto ">
        <div className="relative h-[200px] pt-8 md:h-[400px]">
          <Image
            fill
            src={"/images/banner.jpg"}
            alt="banner"
            className="object-cover rounded-lg"
          />
        </div>

        <div className=" grid grid-cols-3 text-[14px] md:text-[16px] gap-6">
          <div className=" col-span-2 ">
            <div className="py-6">
              {/* date */}
              <p> january, 04-01-2023 </p>
              {/* name event */}
              <h1 className="font-bold text-[45px]">Konser Coldplay</h1>
              {/* promotor  */}
              <h2>Andi Baso Batara Bone</h2>
              {/* location */}
              <h5>Makassar</h5>
            </div>
            <div className="border border-zinc-600 p-4 flex items-center justify-between  w-full md:w-[60%] rounded-sm">
              <div className="flex items-center">
                {/* nama yang punya acaranya */}
                <Image
                  src={"/baso.png"}
                  alt="logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />

                <h4 className="font-bold">Baso x Phincon IT Consultant</h4>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Follow
              </button>
            </div>

            <div>
              <h1>kasisar bapak ramah seklai</h1>
            </div>
            <div>
              <h1> Gak bisa janji manis soalnya bukan Anies</h1>
            </div>
          </div>
          {/* card */}
          <div className="col-span-1  pt-10">
            {/* Get Ticket Card */}
            <div className="bg-white p-4 rounded-lg sticky top-0 shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="harga"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Harga Tiket
                </label>
                <div className="w-full border text-gray-800 p-2 rounded">
                  From Rp.50000,00
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Get Ticket
              </button>
            </div>
            {/* End of Get Ticket Card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
