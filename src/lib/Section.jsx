import { cn } from "./utils";

export default function Section({ children, className }) {
  return (
    <section className={cn("px-6 lg:px-10", className)}>{children}</section>
  );
}
