// ... (imports)
"use client";
import { baseUrl } from "@/utils/config";
import axios from "axios";
import { Review, UForm } from "../../../../../types/event-detail";
import { useCallback, useEffect, useState } from "react";

interface BoxCreateReviewProps {
  eventId: string;
  getEventById: any;
}

const BoxCreateReview: React.FC<BoxCreateReviewProps> = ({
  eventId,
  getEventById,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [eventData, setEventData] = useState<UForm | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get<UForm>(`${baseUrl}/events/${eventId}`);
      const updatedEventData = response.data;
      setEventData(updatedEventData);
    } catch (error) {
      console.error("Error fetching updated data:", error);
    }
  }, [eventId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async () => {
    try {
      // Basic form validation
      if (rating < 1 || rating > 5) {
        setError("Rating must be between 1 and 5");
        return;
      }

      // Clear previous errors
      setError(null);

      const response = await axios.post<Review>(`${baseUrl}/reviews`, {
        rating,
        eventId: Number(eventId),
        content: comment,
        userId: 1,
      });

      console.log("Review submitted successfully:", response.data);
      window.alert("Review Submitted successfully");

      // Fetch updated data after submitting the review
      fetchData();

      // Reset the form
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Failed to submit review. Please try again later.");
    } finally {
      getEventById();
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded">
      <h2 className="font-semibold text-[35px] border-b pb-2">
        Write a Review
      </h2>
      {error && (
        <div className="text-red-500 mb-4">
          <p>{error}</p>
        </div>
      )}
      <div className="flex flex-col mt-4">
        <label htmlFor="rating" className="text-white text-lg font-medium mb-2">
          Rating:
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          min={0}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="p-2 border rounded text-black bg-slate-600"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label
          htmlFor="comment"
          className="text-white text-lg font-medium mb-2"
        >
          Comment:
        </label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="p-2 border rounded text-black bg-slate-600"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Review
      </button>
    </div>
  );
};

export default BoxCreateReview;
