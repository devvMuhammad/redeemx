import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function toTitleCase(str) {
  return str
    .split("-")
    .map((word) =>
      word.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
      )
    )
    .join(" ");
}

export function toCamelCase(str) {
  return str.toLowerCase().split(" ").join("-");
}
