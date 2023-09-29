// useQueryParamUpdater.js
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const createQueryString = (name, value, add = true, searchParams) => {
  const params = new URLSearchParams(searchParams);
  const existingParam = params.get(name);
  // if already a param exists, then add to it
  //e.g brand="Apple" --> brand="Apple,HP";
  params.set(name, existingParam && add ? `${existingParam}.${value}` : value);
  console.log(searchParams.toString());
  return params.toString();
};
const deleteQueryString = (name, searchParams) => {
  const params = new URLSearchParams(searchParams);
  params.delete(name);
  // console.log(params.toString());
  return params.toString();
};

export default function useQueryParamUpdate() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQueryParam = useCallback(
    (paramName, value, add) => {
      const queryString = createQueryString(
        paramName,
        value,
        add,
        searchParams
      );
      router.push(pathname + "?" + queryString);
    },
    [pathname, router, searchParams]
  );

  const deleteQueryParam = useCallback(
    (paramName) => {
      const queryString = deleteQueryString(paramName, searchParams);
      router.push(pathname, "", { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return {
    searchParams,
    updateSearchParams: updateQueryParam,
    deleteSearchParams: deleteQueryParam,
  };
}
