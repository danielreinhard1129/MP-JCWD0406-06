"use client";

import React from "react";

import ProductCard from "./ProductCard";

import "../../../../../node_modules/react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const FeaturedProductSlider = () => {
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
      <ProductCard
        title="Seminar Web"
        actualPrice="150.000"
        discountPrice="50.000"
        category="Workshop"
        city="makassar"
        image="/images/products/p1.jpg"
      />
    </Carousel>
    // <h1>TEst</h1>
  );
};

export default FeaturedProductSlider;
