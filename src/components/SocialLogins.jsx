"use client";
import { Button } from "@/components/ui/button";
import { Facebook, GithubIcon, LucideChrome } from "lucide-react";
import { signIn } from "next-auth/react";

export default function SocialLogins() {
  return (
    <div className="flex justify-between mb-6">
      <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="flex-1 mr-2 bg-black hover:bg-white/10 border-2 border-gray-800  text-white"
      >
        <LucideChrome className="mr-2" />
        Google{"\n              "}
      </Button>

      <Button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="flex-1 ml-2 bg-black hover:bg-white/10 border-2 border-gray-800  text-white"
      >
        <GithubIcon className="mr-2" />
        Github{"\n              "}
      </Button>
    </div>
  );
}
