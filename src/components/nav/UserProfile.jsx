"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function UserProfile() {
  const { data: session } = useSession();
  // signIn("github");
  /*
  !STEPS RELATED TO AUTHORIZATION & AUTHENTICATION IN MY APP
  - click on sign in button should take you to login form
  - for now, lets focus on built-in providers
  - on sign in, redirect to the main page and DISPLAY THE USER DATA (name and the profile picture)
  - are there any protected routes? I guess not
  */
  console.log(session);
  return session ? (
    <Button size="sm" onClick={signOut}>
      Sign Out
    </Button>
  ) : (
    <Link href="/signin">
      <Button size="sm" onClick={() => signIn("github")}>
        Sign In
      </Button>
    </Link>
  );
}
