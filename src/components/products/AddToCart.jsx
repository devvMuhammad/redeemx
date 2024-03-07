"use client";
import { Button } from "@/components/ui/button";
import { addItem } from "@/store/cart";
import { useDispatch } from "react-redux";

export default function AddToCart({
  product: { id, name, price, discount, brand },
}) {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(addItem({ id, name, price, discount, brand }));
      }}
      className="font-bold tracking-wide"
      size="sm"
    >
      Add to Cart
    </Button>
  );
}
