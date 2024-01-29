// ReviewSection.tsx
import React from "react";
import { Review } from "../../../../../types/event-detail";

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="py-6 bg-gray-900 p-6 rounded">
      <h2 className="font-semibold text-2xl border-b pb-2 mb-4">
        Ulasan dan Review
      </h2>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="mb-4">
            <p className="text-white">🌟 Ulasan Event:</p>
            <p className="text-lime-500">{review.content}</p>
            <p>Saya memberikan rating: {review.rating} out of 5</p>
            <p>{new Date(review.createdAt).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p className="text-white">Tidak ada ulasan saat ini.</p>
      )}
    </div>
  );
};

export default ReviewSection;
