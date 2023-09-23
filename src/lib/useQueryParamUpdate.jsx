// useQueryParamUpdater.js
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { createQueryString } from "@/lib/utils";

export default function useQueryParamUpdate() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryParam = useCallback(
    (paramName, value) => {
      const queryString = createQueryString(paramName, value, searchParams);
      router.push(pathname + "?" + queryString);
    },
    [pathname, router, searchParams]
  );

  return { searchParams, updateSearchParams: updateQueryParam };
}
