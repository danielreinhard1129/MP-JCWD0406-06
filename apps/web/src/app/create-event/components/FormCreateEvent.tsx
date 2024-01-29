import { Label, Select, TextInput, Textarea } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";

import "react-phone-number-input/style.css";
import * as yup from "yup";
import { UForm } from "../../../../types/event-detail";

interface FormCreateEventProps {
  onSubmit: (eventData: UForm) => void;
}

const validationSchema = yup.object({
  creatorName: yup.string().required("Creator Name is required"),
  eventDate: yup.date().required("Event Date is required"),
  category: yup.number().required("Category is required"),
  eventName: yup.string().required("Event Name is required"),
  eventTime: yup.string().required("Event Time is required"),
  endTime: yup.date().required("End Time is required"),
  city: yup.string().required("City is required"),
  price: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
});

const FormCreateEvent: React.FC<FormCreateEventProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      creatorName: "",
      eventDate: "",
      categoryId: 0,
      eventName: "",
      eventTime: "",
      endTime: "",
      city: "",
      price: "",
      description: "",
      image: null,
      category: 0,
      categoryTitle: "",
      reviews: [],
    },
    validationSchema,
    onSubmit: (values) => {
      // Combine eventDate and eventTime into a single ISO-8601 DateTime
      const eventDateTime = `${values.eventDate}T${values.eventTime}:00.000Z`;
      const endTime = `${values.endTime}T${values.eventTime}:00.000Z`;

      // Create a new object with the combined date and time
      const eventData = {
        ...values,

        eventDate: eventDateTime,
        endTime: endTime,
      };

      onSubmit(eventData);
    },
  });

  return (
    <form
      className="flex w-[80%] flex-col gap-1 p-5"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex justify-center items-center">
        <h1 className="text-slate-700 font-bold text-2xl ">
          Create Event Here
        </h1>
      </div>

      <div className="flex mb-2">
        <div className="w-1/2 pr-2">
          <div className="mb-2 block">
            <Label htmlFor="creatorName" value="Creator Name" />
          </div>
          <TextInput
            id="creatorName"
            type="text"
            name="creatorName"
            value={formik.values.creatorName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            shadow
          />
          {formik.errors.creatorName && formik.touched.creatorName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.creatorName}
            </p>
          )}
        </div>

        {/* event name */}
        <div className=" w-1/2 pl-2">
          <div className="mb-2 block">
            <Label htmlFor="eventName" value="Event Name" />
          </div>
          <TextInput
            id="eventName"
            type="text"
            name="eventName"
            value={formik.values.eventName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            shadow
          />
          {formik.errors.eventName && formik.touched.eventName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.eventName}
            </p>
          )}
        </div>
      </div>

      {/* eventDate */}
      <div className=" flex mb-2">
        <div className=" w-1/2 pr-2">
          <div className="mb-2 block">
            <Label htmlFor="eventDate" value="Event Date" />
          </div>
          <TextInput
            id="eventDate"
            type="date"
            name="eventDate"
            value={formik.values.eventDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            shadow
          />
          {formik.errors.eventDate && formik.touched.eventDate && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.eventDate}
            </p>
          )}
        </div>

        {/* eventCategory */}
        <div className=" w-1/2 pl-2">
          <div className="block mb-2">
            <Label htmlFor="category" value="category" />
          </div>
          <Select
            id="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          >
            <option value={0}>Select your Category</option>
            <option value={1}>Agama</option>
            <option value={2}>Musik</option>
            <option value={3}>Seminar</option>
            <option value={4}>Health</option>
            <option value={5}>Business</option>
            <option value={6}>Drink&Food</option>
          </Select>
        </div>
      </div>

      <div className=" flex mb-2">
        <div className=" w-1/2 pr-2">
          <div className="mb-2 block">
            <Label htmlFor="eventTime" value="Event Time" />
          </div>
          <TextInput
            id="eventTime"
            type="time"
            name="eventTime"
            value={formik.values.eventTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            shadow
          />
          {formik.errors.eventTime && formik.touched.eventTime && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.eventTime}
            </p>
          )}
        </div>

        <div className="  w-1/2 pl-2">
          <div className="mb-2 block">
            <Label htmlFor="endTime" value="End Time" />
          </div>
          <TextInput
            id="endTime"
            type="date"
            name="endTime"
            value={formik.values.endTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            shadow
          />
          {formik.errors.endTime && formik.touched.endTime && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.endTime}</p>
          )}
        </div>
      </div>

      <div className=" flex mb-2">
        <div className=" w-1/2 pr-2">
          <div className="mb-2 block">
            <Label htmlFor="city" value="City" />
          </div>
          <TextInput
            id="city"
            type="text"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            shadow
          />
          {formik.errors.city && formik.touched.city && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
          )}
        </div>

        <div className=" w-1/2 pl-2">
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput
            id="price"
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            shadow
          />
          {formik.errors.price && formik.touched.price && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
          )}
        </div>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          className=" h-32 p-2 border border-gray-300 rounded-md resize-none"
        />
        {formik.errors.description && formik.touched.description && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.description}
          </p>
        )}
      </div>

      <button
        type="submit"
        className=" bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FormCreateEvent;
