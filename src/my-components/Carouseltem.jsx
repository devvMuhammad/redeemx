import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function CarouselItem(props) {
  return (
    <Card className="mx-2 bg-black text-white">
      <CardHeader>
        <div className="h-[200px] bg-white"></div>
      </CardHeader>
      <CardContent className="space-y-4 text-lg">
        {/* Link in future */}
        <h2 className="lg:text-xl font-extrabold h-[70px]">{props.name}</h2>
        <p className="font-semibold text-xl tracking-wider">{props.price}</p>
      </CardContent>
      <CardFooter>
        {/* Agar variant huwa to add kardena */}
        <Button className="font-bold tracking-wide">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
