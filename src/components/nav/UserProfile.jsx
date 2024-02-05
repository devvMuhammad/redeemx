"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function UserProfile() {
  const { data: session } = useSession();
  // signIn("github");

  console.log(session);
  return session ? (
    <Button size="sm" onClick={signOut}>
      Sign Out
    </Button>
  ) : (
    // <Link href="/signin">
    <Button size="sm" onClick={() => signIn("github")}>
      Sign In
    </Button>
    // </Link>
  );
}
