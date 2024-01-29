"use client";

import formatCurrency from "@/utils/formatCurrency";
import formatDate from "@/utils/formatDate";
import { CalendarIcon, CurrencyDollarIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

import { UForm } from "../../../../types/event-detail";
import AddImageForEvents from "./components/AddImageForEvents";
import FormEditEvent from "./components/FormEditEvent";
import InterestedEventComponent from "./components/InterestedEventCard";
import LoadingDetailEvent from "./components/LoadingDetailEvent";
import ReviewSection from "./components/UlasanAndReview";
import CardBuyTicket from "./components/cardBuyTicket";
import BoxCreateReview from "./components/BoxCreateReview";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const EventDetail = () => {
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState<UForm | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddImageModalOpen, setIsAddImageModalOpen] = useState(false);

  const getEventById = async () => {
    try {
      const response = await axios.get<UForm>(`${baseUrl}/events/${id}`);
      const eventData = response.data;
      setEventDetail(eventData);
    } catch (error) {
      console.error("Error fetching event detail:", error);
    }
  };

  // if (id) {
  //   getEventById();
  // }
  useEffect(() => {
    getEventById();
  }, [id]);

  if (!eventDetail) {
    return <LoadingDetailEvent />;
  }

  const handleAddImageClick = () => {
    setIsAddImageModalOpen(true);
  };

  const handleAddImageModalClose = () => {
    setIsAddImageModalOpen(false);
  };

  // EDIT EVENT
  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleEditSubmit = async (values: UForm) => {
    try {
      // Perbarui URL untuk mengirim permintaan PUT ke endpoint yang benar
      const response = await axios.put<UForm>(`${baseUrl}/events/${id}`, {
        eventName: values.eventName,
        eventDate: values.eventDate,
        eventTime: values.eventTime,
        endTime: values.endTime,
        categoryId: Number(values.category),
        city: values.city,
        price: values.price,
        description: values.description,
      });

      setEventDetail(response.data);

      handleEditModalClose();
    } catch (error) {
      console.error("edit data failed", error);
    }
  };
  const eventDate = formatDate(new Date(eventDetail.eventDate));
  const endTime = formatDate(new Date(eventDetail.endTime));
  const priceAsNumber = parseFloat(eventDetail.price);
  const url = `http://localhost:8000/events/${eventDetail?.image}`;

  return (
    <div className=" bg-gray-700 ">
      <div className=" mx-auto max-w-6xl pt-10 px-4 text-white opacity-">
        <div className=" h-auto ">
          <div className="relative rounded-lg h-[200px] pt-8 md:h-[400px] bg-slate-500">
            <Image
              layout="fill"
              src={!eventDetail?.image ? "/images/1.jpg" : url}
              alt="banner"
              className="object-cover p-5 rounded-xl"
            />
          </div>

          <div className=" grid grid-cols-3 text-[14px] md:text-[16px] gap-6">
            <div className=" col-span-2 ">
              <div className="py-4">
                {/* date */}

                <div className=" flex items-center">
                  <div className=" flex items-center space-x-2">
                    <CalendarIcon className=" w-5 h-5  text-red-500" />
                    <p>{eventDate}</p>
                    <button
                      className=" md:text-[17px] bg-slate-950 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-[6px]"
                      onClick={handleAddImageClick}
                    >
                      Add Image
                    </button>
                    <button onClick={handleEditClick}>Edit</button>
                  </div>
                </div>

                {/* name event */}
                <div className=" flex items-center space-x-2 mt-2">
                  <h1 className="font-bold text-[30px] md:text-[45px] ">
                    {eventDetail.eventName}
                  </h1>
                </div>
                {/* category */}
                <button className="py-2 my-3 px-7 bg-gray-500 hover:bg-blue-700 text-white font-bold rounded">
                  {eventDetail.categoryTitle}
                </button>

                {/* promotor  */}
                <div className="py-4">
                  {/* promotor  */}
                  <div className="flex items-center space-x-2 mb-2">
                    <FaRegUserCircle className="w-5 h-5  text-pink-700" />
                    <h2>{eventDetail.creatorName}</h2>
                  </div>

                  {/* location */}
                  <div className="flex items-center space-x-2">
                    <FaMapLocationDot className="w-5 h-5 text-blue-500 " />
                    <h5 className="">Lokasi: {eventDetail.city}</h5>
                  </div>
                </div>
              </div>
              <div className="border border-zinc-600 p-4 flex bg-zinc-500 items-center justify-between  w-full md:w-[60%] rounded-lg">
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

              <div className=" py-7 mb-1 pb-8">
                <div className="flex items-center space-x-2 ">
                  <IoIosTimer className="text-green-500 w-7 h-7 " />
                  <p>{eventDetail.eventTime}</p>
                </div>

                <div className="flex items-center space-x-2 py-2">
                  <p>Akan berakhir pada Tanggal: </p>
                  <h2>{endTime}</h2>
                </div>

                <div className="flex items-center space-x-2 mb-11">
                  <CurrencyDollarIcon className=" text-yellow-600 w-7 h-7" />
                  <div>{formatCurrency(parseFloat(eventDetail.price))}</div>
                </div>

                {/* event Detail */}
                <div className="bg-gray-900 p-6 rounded">
                  <h2 className=" font-semibold text-[35px] border-b pb-2">
                    Event About
                  </h2>

                  <div className="flex items-center space-x-2">
                    <p>{eventDetail.description}</p>
                  </div>
                </div>
                {/* ulasan end review */}
                <div className=" py-5">
                  <BoxCreateReview
                    eventId={id.toString()}
                    getEventById={getEventById}
                  />
                </div>
                <div className=" py-6">
                  {/* tolong buatkan kode disini untuk menampilkan ulasan dan review ini */}
                  <ReviewSection reviews={eventDetail.reviews} />
                </div>
              </div>

              {/* end informasi */}
            </div>

            {/*  */}
            {/* card */}

            <CardBuyTicket price={priceAsNumber} />
          </div>
        </div>
      </div>
      <div>
        {/* card product */}
        <InterestedEventComponent />
      </div>
      {isAddImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-md w-full">
            <div className="relative h-64">
              <Image
                layout="fill"
                src="/images/banner.jpg"
                alt="Modal Background"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-3xl font-semibold">
                  Add Image
                </div>
              </div>
            </div>
            <div className="p-6">
              <AddImageForEvents />
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleAddImageModalClose}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-xl ">
          <div className="rounded-lg">
            <FormEditEvent
              initialValues={eventDetail || {}}
              onSubmit={handleEditSubmit}
              onCancel={handleEditModalClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
