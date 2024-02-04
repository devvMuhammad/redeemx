/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8iXYorWsMtw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import SigninForm from "@/components/forms/SigninForm";
import { Button } from "@/components/ui/button";
import { Facebook, GithubIcon, LucideChrome } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-lg rounded-lg border-2 border-gray-800 p-8 text-white">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="mt-2 mb-6">Choose your preferred sign in method</p>
        <div className="flex justify-between mb-6">
          <Button className="flex-1 mr-2 bg-black hover:bg-white/10 border-2 border-gray-800  text-white">
            <LucideChrome className="mr-2" />
            Google{"\n              "}
          </Button>
          <Button className="flex-1 mx-2 bg-black hover:bg-white/10 border-2 border-gray-800  text-white">
            <Facebook className="mr-2" />
            Facebook{"\n              "}
          </Button>
          <Button className="flex-1 ml-2 bg-black hover:bg-white/10 border-2 border-gray-800  text-white">
            <GithubIcon className="mr-2" />
            Github{"\n              "}
          </Button>
        </div>
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-600" />
          <span className="mx-4 text-sm text-gray-500">OR CONTINUE WITH</span>
          <div className="flex-grow border-t border-gray-600" />
        </div>
        <SigninForm />
        <div className="mt-6 flex justify-between text-sm">
          <Link href="#" className="text-gray-500 font-thin">
            Don't have an account?{" "}
            <span className="text-white font-bold">Sign up</span>
          </Link>
          <Link href="#">Reset password</Link>
        </div>
      </div>
    </div>
  );
}
