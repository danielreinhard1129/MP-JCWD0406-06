"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductAllCard from "./ProductAllEvent";

interface Events {
  id: number;
  eventName: string;
  image: string;
  categoryId: number;
  price: string;
  city: string;
  eventDate: string;
  categoryTitle: string;
}

const AllEvent: React.FC = () => {
  const [events, setEvents] = useState<Events[]>([]);

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      try {
        const response = await axios.get<Events[]>(
          "http://localhost:8000/api/events"
        );
        // Shuffle the array before setting it in the state
        setEvents(shuffleArray(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromBackend();
  }, []);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: Events[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      {events.map((event) => (
        <ProductAllCard
          key={event.id}
          id={event.id}
          eventName={event.eventName}
          image={`http://localhost:8000/events/${event.image}`}
          categoryId={event.categoryId}
          price={event.price}
          city={event.city}
          eventDate={event.eventDate}
          categoryTitle={event.categoryTitle}
        />
      ))}
    </div>
  );
};

export default AllEvent;
