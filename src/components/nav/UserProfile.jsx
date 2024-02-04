import Link from "next/link";
import { Button } from "../ui/button";

export default function UserProfile() {
  return (
    <Link href="/signin">
      <Button size="sm">Sign In</Button>
    </Link>
  );
}
