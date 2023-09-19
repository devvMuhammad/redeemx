import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-2 lg:px-2 ">
        <Skeleton className="w-40 h-10" />
        <Skeleton className="w-32 h-10" />
        <Skeleton className="w-60 h-10" />
      </div>

      <div
        className={`p-2 flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-2 b-red-500`}
      >
        {Array(12)
          .fill("")
          .map((_, i) => (
            <div key={i} className="flex flex-col p-4 gap-4 rounded-lg ">
              <Skeleton className="h-[250px] w-full" />

              <Skeleton className="h-30 w-full" />
              {/* PRICES */}
              <div className="flex gap-8">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
              </div>

              <div>
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
