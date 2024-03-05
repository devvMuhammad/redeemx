import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[66vh] py-12">
      <div className="container flex flex-col gap-4 items-center justify-center text-center px-4 md:px-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            404 Not Found
          </h1>
          <p className="max-w-[600px] font-thin text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            This page does not exist. If you are looking for the brand page,
            then I'm yet to make it. I'm just too busy :(
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Button>
            <Link href="/">Go to the Home Page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
