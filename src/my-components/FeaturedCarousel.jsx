"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
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
    name: "Colorful sneakers",
    price: "$19.99",
    description: "Some text about the product..",
  },
  {
    id: 2,
    name: "Sport sneakers",
    price: "$21.99",
    description: "Some text about the product..",
  },
  {
    id: 3,
    name: "iWatch",
    price: "$99.99",
    description: "Some text about the product..",
  },
  {
    id: 4,
    name: "Water Bottle",
    price: "$14.99",
    description: "Some text about the product..",
  },
  {
    id: 5,
    name: "Vans sneakers",
    price: "$38.99",
    description: "Some text about the product..",
  },
  {
    id: 6,
    name: "Coco Noir",
    price: "$149.99",
    description: "Some text about the product..",
  },
  {
    id: 7,
    name: "Sunglasses",
    price: "$38.99",
    description: "Some text about the product..",
  },
  {
    id: 8,
    name: "Dove cream",
    price: "$49.99",
    description: "Some text about the product..",
  },
];
function Product(props) {
  return (
    <Card className="mx-2 bg-black text-white">
      <CardHeader>
        <div className="h-[200px] bg-red-500"></div>
      </CardHeader>
      <CardContent>
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
      </CardContent>
      <CardFooter>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default function Slider() {
  const product = productData.map((item) => (
    <Product
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
