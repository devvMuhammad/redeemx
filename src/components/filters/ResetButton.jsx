"use client";
import { Button } from "@/components/ui/button";
import useQueryParamUpdate from "@/hooks/useQueryParamUpdate";

export default function ResetButton() {
  const { resetSearchParams } = useQueryParamUpdate();
  return (
    <Button className="font-bold" onClick={resetSearchParams}>
      Reset
    </Button>
  );
}
