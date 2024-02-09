import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CarouselItem(props) {
  return (
    <Card className="mx-2 border bg-black text-white">
      <CardHeader>
        <div className="h-[200px] bg-white"></div>
      </CardHeader>
      <CardContent className="space-y-4 text-lg">
        {/* Link in future */}
        <h2 className="lg:text-xl h-[120px]">{props.name}</h2>
        {/* PRICES */}
        <div className="w-full flex gap-3">
          <span className="font-semibold text-xl tracking-wider mr-6">
            {props.price}
          </span>
          <span className="font-semibold text-xl tracking-wider line-through">
            $1100
          </span>
        </div>
      </CardContent>
      <CardFooter>
        {/* Agar variant huwa to add kardena */}
        <Button className="font-bold tracking-wide">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
