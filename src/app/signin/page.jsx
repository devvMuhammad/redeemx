/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8iXYorWsMtw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 text-white">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="mt-2 mb-6">Choose your preferred sign in method</p>
        <div className="flex justify-between mb-6">
          <Button className="flex-1 mr-2 bg-white text-gray-900">
            <ChromeIcon className="mr-2" />
            Google{"\n              "}
          </Button>
          <Button className="flex-1 mx-2 bg-[#3b5998]">
            <FacebookIcon className="mr-2" />
            Facebook{"\n              "}
          </Button>
          <Button className="flex-1 ml-2 bg-[#7289da]">
            <DiscIcon className="mr-2" />
            Discord{"\n              "}
          </Button>
        </div>
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-600" />
          <span className="mx-4 text-sm text-gray-500">OR CONTINUE WITH</span>
          <div className="flex-grow border-t border-gray-600" />
        </div>
        <form className="mt-6">
          <label className="block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input
            className="mt-2 mb-4"
            id="email"
            placeholder="Email"
            type="email"
          />
          <label className="block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <Input
            className="mt-2 mb-6"
            id="password"
            placeholder="Password"
            type="password"
          />
          <Button className="w-full">Sign in</Button>
        </form>
        <div className="mt-6 flex justify-between text-sm">
          <Link className="text-blue-500" href="#">
            Don't have an account? Sign up
          </Link>
          <Link className="text-blue-500" href="#">
            Reset password
          </Link>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
