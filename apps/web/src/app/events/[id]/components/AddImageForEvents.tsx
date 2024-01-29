"use client";

import { baseUrl } from "@/utils/config";
import axios from "axios";
import { useParams } from "next/navigation";
import { ChangeEvent } from "react";

const AddImageForEvents = () => {
  const { id } = useParams();

  const updatePhotoEvents = async (formData: FormData) => {
    try {
      const { data } = await axios.post(
        baseUrl + `/events/${id}/images`,
        formData
      );

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to upload image. Please try again.");
    }
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      await updatePhotoEvents(formData);
    }
  };

  return (
    <main>
      <div>
        <input type="file" onChange={onChangeFile} />
      </div>
    </main>
  );
};

export default AddImageForEvents;
