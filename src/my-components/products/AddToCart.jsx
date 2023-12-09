"use client";
import { Button } from "@/components/ui/button";
import { addItem } from "@/store/cart/cart";
import { useDispatch } from "react-redux";

export default function AddToCart({
  product: { name, price, discount, brand },
}) {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(addItem({ name, price, discount, id: name, brand }));
      }}
      className="font-bold tracking-wide"
      size="sm"
    >
      Add to Cart
    </Button>
  );
}
