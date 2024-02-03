"use client";
import { Button } from "@/components/ui/button";
import useQueryParamUpdate from "@/hooks/useQueryParamUpdate";

export default function ResetButton() {
  const { resetSearchParams } = useQueryParamUpdate();
  return <Button onClick={resetSearchParams}>Reset</Button>;
}
