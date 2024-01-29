"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Link from "next/link";

interface Events {
  id: number;
  eventName: string;
  image: string;
  discountPrice: string;
  categoryId: number;
  price: string;
  city: string;
  eventDate: string;
  categoryTitle: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const FeaturedProductSlider: React.FC = () => {
  const [events, setEvents] = useState<Events[]>([]);

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      try {
        const response = await axios.get<Events[]>(
          "http://localhost:8000/api/events"
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromBackend();
  }, []);

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {events.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
          <ProductCard
            id={event.id}
            eventName={event.eventName}
            image={`http://localhost:8000/events/${event.image}`}
            // discountPrice={event.discountPrice}
            categoryId={event.categoryId}
            price={event.price}
            city={event.city}
            eventDate={event.eventDate}
            categoryTitle={event.categoryTitle}
          />
        </Link>
      ))}
    </Carousel>
  );
};

export default FeaturedProductSlider;
