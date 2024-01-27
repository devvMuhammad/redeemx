import { Skeleton } from "@/components/ui/skeleton";

export default function FiltersSkeleton() {
  return (
    <div className="hidden lg:block px-3 space-y-8">
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-10 w-[70%]" />
    </div>
  );
}
