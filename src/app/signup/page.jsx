import SocialLogins from "@/components/SocialLogins";
import SignupForm from "@/components/forms/SignUpForm";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-lg rounded-lg border-2 border-gray-800 p-8 text-white">
        <h1 className="text-lg md:text-2xl font-bold">Sign Up</h1>
        <p className="text-sm md:text-lg mt-2 mb-6">
          Get Registered to have seamless shopping experience!
        </p>
        <SocialLogins />
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-600" />
          <span className="mx-4 text-sm text-gray-500">OR CONTINUE WITH</span>
          <div className="flex-grow border-t border-gray-600" />
        </div>
        <SignupForm />
        <div className="mt-6 flex justify-between text-sm">
          <Link href="/signin" className="text-gray-500 font-thin">
            Already have an account?{" "}
            <span className="text-white font-bold hover:underline">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
