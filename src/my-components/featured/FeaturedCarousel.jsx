"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./Carouseltem";
import { productData, responsive } from "./FeaturedData";
import "./carousel.css";

export default function FeaturedCarousel() {
  const products = productData.map((item) => (
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
      {products}
    </Carousel>
  );
}
