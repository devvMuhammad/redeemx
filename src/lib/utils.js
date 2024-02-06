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

export function generateCustomerID() {
  // Function to generate a random string of a specified length
  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  // Generate the random customer ID
  const randomCustomerID = generateRandomString(6);

  return randomCustomerID;
}
