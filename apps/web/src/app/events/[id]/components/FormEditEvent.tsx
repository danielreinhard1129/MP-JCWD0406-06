// FormEditEvent.tsx
import React from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";

import { UForm } from "../../../../../types/event-detail";

interface FormEditEventProps {
  initialValues: UForm;
  onSubmit: (eventData: UForm) => void;
  onCancel: () => void;
}

const validationSchema = yup.object({
  creatorName: yup.string().required("Creator Name is required"),

  eventName: yup.string().required("Event Name is required"),
  eventDate: yup.date().required("Event Date is required"),
  category: yup
    .number()
    .min(1, "Please select a valid category")
    .required("Category is required"),
  eventTime: yup.string().required("Event Time is required"),
  endTime: yup.date().required("End Time is required"),
  city: yup.string().required("City is required"),
  price: yup.number().required("Price is required"),
  description: yup.string().required("Description is required"),
});

const FormEditEvent: React.FC<FormEditEventProps> = ({
  initialValues,
  onSubmit,
  onCancel,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Format eventDate in "yyyy-MM-dd" format
      const eventDate = new Date(values.eventDate).toISOString().split("T")[0];

      // Format eventTime in "HH:mm" format
      const eventTime = values.eventTime.slice(0, 5);

      // Combine eventDate and eventTime to create ISO string
      const eventDateTime = `${eventDate}T${eventTime}:00.000Z`;

      // Format endTime in "yyyy-MM-ddTHH:mm:ss.SSSZ" format
      const endTime = new Date(values.endTime).toISOString();

      const eventData = {
        ...values,
        eventDate: eventDateTime,
        endTime: endTime,
      };

      formik.setValues(eventData);

      try {
        onSubmit(eventData);
        alert("Event Updated successfully");
      } catch (error) {
        console.log(error);
        toast.error("Error updating event", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
        });
      }
    },
  });

  return (
    <div className="min-h-screen  flex  items-center shadow-xl  container rounded-lg">
      <div className=" w-full  flex flex-col md:flex-row  rounded-md">
        <div className="w-full md:w-1/2 py-[10px] flex flex-col justify-center items-center bg-secondary">
          <h1 className="text-zinc-300 font-bold text-2xl ml-3 mb-5 mt-5">
            Welcome to Event Creation!
          </h1>
          <p className="text-center text-yellow-200 text-sm mx-auto w-full md:w-auto">
            Lets create an amazing event!
          </p>
        </div>
        <div className="w-full md:w-1/2 p-2 bg-slate-300">
          <div className="flex justify-center bg-white h-full rounded-md">
            <form
              className="flex  flex-col gap-1 p-5 w-full "
              onSubmit={formik.handleSubmit}
            >
              <div className="flex justify-center items-center">
                <h1 className="text-slate-700 font-bold text-2xl ">
                  Edit Event Here
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
                    <Label htmlFor="category" value="Category" />
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
                  {formik.errors.category && formik.touched.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.category}
                    </p>
                  )}
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
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.endTime}
                    </p>
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
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.city}
                    </p>
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
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.price}
                    </p>
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
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={onCancel}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditEvent;
