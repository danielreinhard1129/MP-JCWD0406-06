/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import axios, { AxiosError } from "axios";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import YupPassword from "yup-password";
import FormCreateEvent from "./FormCreateEvent";
import { UForm } from "../../../../types/event-detail";

// Assuming the file name is FormCreateEvent

YupPassword(yup);

const CardCreateEvent = () => {
  const baseUrl = "http://localhost:8000/api";
  const router = useRouter();

  const handleSubmit = async (values: UForm) => {
    try {
      // Handle form submission logic here

      await axios.post(baseUrl + "/events", {
        creatorName: values.creatorName,
        eventName: values.eventName,
        eventDate: values.eventDate,
        eventTime: values.eventTime,
        endTime: values.endTime,
        categoryId: Number(values.category),
        city: values.city,
        price: values.price,
        description: values.description,

        // ... other form fields
      });

      toast.success("Event Created Successfully", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
      });

      setTimeout(() => {
        // Redirect or perform other actions after successful submission
        router.push("/");
      }, 3000);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;

        toast.error(errorMsg, {
          position: "top-right",
          autoClose: 1000,
          theme: "light",
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen py-5 flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full">
        <div className=" w-full  flex flex-col md:flex-row  rounded-md">
          <div className="w-full md:w-1/2 py-[10px] flex flex-col justify-center items-center bg-secondary">
            <h1 className="text-zinc-300 font-bold text-2xl ml-3 mb-5 mt-5">
              Welcome to Event Creation!
            </h1>
            <p className="text-center text-yellow-200 text-sm mx-auto w-full md:w-auto">
              Lets create an amazing event!
            </p>
            {/* <Link href={"/some-login-route"}>
              <Button className="mt-[20px]" color="light" pill>
                Login
              </Button>
            </Link> */}
          </div>
          <div className="w-full md:w-1/2 p-5 bg-slate-300">
            <div className="flex justify-center bg-white h-full rounded-md">
              <FormCreateEvent onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCreateEvent;
