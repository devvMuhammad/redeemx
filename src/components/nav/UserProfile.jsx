"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { User2Icon } from "lucide-react";
import Image from "next/image";

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
  // console.log(session);

  return (
    <div className="flex gap-2 items-center">
      {session ? (
        <>
          <Button size="sm" onClick={signOut}>
            Sign Out
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none focus:ring-0">
              <div>
                {session.user.image ? (
                  <Image
                    alt="PF Pic"
                    className="rounded-full"
                    width={40}
                    height={32}
                    src={session.user.image}
                  />
                ) : (
                  <User2Icon className="h-8 w-8 rounded-full border" />
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{session.user.name}</DropdownMenuItem>
              <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
              <DropdownMenuItem>
                <span className="font-bold mr-1">ID: </span>
                {session.user.customerId}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Link href="/signin">
            {/* <Button size="sm" onClick={() => signIn("github")}> */}
            <Button size="sm">Sign In</Button>
          </Link>
          <User2Icon className="p-1 h-8 w-8 border-2 border-white rounded-full" />
        </>
      )}
    </div>
  );
}
