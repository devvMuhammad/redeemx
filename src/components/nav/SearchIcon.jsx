"use client";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import useDebounce from "@/hooks/useDebounce";
import filterProducts from "@/lib/actions/filterProducts";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(false);
  // const [isPending, startTransition] = useTransition();
  const debouncedQuery = useDebounce(query);

  // const fetchData = async (debouncedQuery) => {
  //   setLoading(true);
  //   try {
  //     const data = await filterProducts(debouncedQuery);
  //     console.log(data);
  //     setProducts(data);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    if (query.length <= 0) {
      setProducts(null);
      return;
    }
    setLoading(true);
    try {
      // filterProducts(debouncedQuery)
      fetch("http://localhost:3000/api/search", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchString: debouncedQuery,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("The data from the api is", data);
          console.log("updating the products correctly");
          setProducts(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } catch (err) {
      console.error(err);
    }
    // fetchData(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className="border rounded-xl p-1 cursor-pointer hover:bg-white hover:text-black">
      <SearchIcon className="h-[25px] w-[24px]" onClick={() => setOpen(true)} />
      <CommandDialog
        className="rounded-lg border"
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) {
            setQuery("");
          }
        }}
      >
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Type a command or search..."
        />
        <CommandList>
          {isLoading || products?.length === 0 ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            <div className="bg-red-500">
              {products?.map((product) => {
                console.log("yo");
                return (
                  <CommandItem>
                    <span>{product.name}</span>
                  </CommandItem>
                );
              })}
            </div>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
