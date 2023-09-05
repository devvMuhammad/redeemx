"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

import CarouselItem from "./Carouseltem";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 700 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 700, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const productData = [
  {
    id: 1,
    name: "MacBook Pro",
    price: "$1299.99",
  },
  {
    id: 2,
    name: "iPhone 12",
    price: "$799.99",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    price: "$1099.99",
  },
  {
    id: 4,
    name: "Samsung Galaxy S21",
    price: "$899.99",
  },
  {
    id: 5,
    name: "Xbox Live Gold For 12 Months",
    price: "$80.00",
  },
  {
    id: 6,
    name: "Dell XPS 13",
    price: "$1199.99",
  },
  {
    id: 7,
    name: "PlayStation Gift Card",
    price: "$25.00",
  },
  {
    id: 8,
    name: "Steam Gift Card",
    price: "$20.00",
  },
  {
    id: 9,
    name: "Bose Headphones",
    price: "$299.99",
  },
  {
    id: 10,
    name: "Dell Gaming Mouse",
    price: "$49.99",
  },
  {
    id: 11,
    name: "MacBook Air M1 2020 8GB RAM 256GB SSD",
    price: "$999.99",
  },
  {
    id: 12,
    name: "iPhone SE",
    price: "$399.99",
  },
];

export default function FeaturedCarousel() {
  const product = productData.map((item) => (
    <CarouselItem
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <Carousel
      className="w-[95vw] mx-auto"
      showDots={true}
      responsive={responsive}
    >
      {product}
    </Carousel>
  );
}
