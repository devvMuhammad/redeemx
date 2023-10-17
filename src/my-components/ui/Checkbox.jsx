import { Checkbox as ShadCheckbox } from "@/components/ui/checkbox";
import useQueryParamUpdate from "@/lib/useQueryParamUpdate";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function Checkbox({ id, queryName, queryValue, pop, ...props }) {
  // const router = useRouter();
  const searchParams = useSearchParams();
  // const router = useRouter();
  const { updateSearchParams, deleteSearchParams } = useQueryParamUpdate();
  return (
    <ShadCheckbox
      {...props}
      id={id}
      onCheckedChange={(isChecked) => {
        //on brand check click, reset the page param
        // updateSearchParams("page", "", false);
        // first see if checked pehle se
        if (!isChecked) {
          // dont delete query directly, first check if there is a value already in place, we have to remove that one
          // e.g ?brand=HP.Apple --> ?brand=HP
          if (searchParams.get(queryName)?.includes(".")) {
            // convert to array and remove the one
            let queries = searchParams.get(queryName).split(".");
            // remove the clicked one
            queries = queries.filter((query) => query !== queryValue);
            const updatedQueries = queries.join(".");
            updateSearchParams(queryName, updatedQueries, false);
            return;
          }
          // if only one, then just clear the whole query
          deleteSearchParams(queryName);
          return;
        }
        // otherwise add it normally

        updateSearchParams(queryName, queryValue, false, true);
      }}
    />
  );
}
