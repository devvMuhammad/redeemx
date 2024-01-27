import { Skeleton } from "@/components/ui/skeleton";
import MainProductsSkeleton from "./MainProductsSkeleton";

export default function ProductsSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-2 lg:px-2 ">
        <Skeleton className="w-40 h-10" />
        <Skeleton className="w-32 h-10" />
        <Skeleton className="w-60 h-10" />
      </div>

      <MainProductsSkeleton />
    </div>
  );
}
