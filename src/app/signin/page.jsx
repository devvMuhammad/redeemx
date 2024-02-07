/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8iXYorWsMtw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import SocialLogins from "@/components/SocialLogins";
import SigninForm from "@/components/forms/SigninForm";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-lg rounded-lg border-2 border-gray-800 p-8 text-white">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="mt-2 mb-6">Choose your preferred sign in method</p>
        <SocialLogins />
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-600" />
          <span className="mx-4 text-sm text-gray-500">OR CONTINUE WITH</span>
          <div className="flex-grow border-t border-gray-600" />
        </div>
        <SigninForm />
        <div className="mt-6 flex justify-between text-sm">
          <Link href="/signup" className="text-gray-500 font-thin">
            Don't have an account?{" "}
            <span className="text-white font-bold hover:underline">
              Sign up
            </span>
          </Link>
          <Link className="font-bold hover:underline" href="#">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
