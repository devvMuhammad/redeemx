"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { customSignIn } from "../../../db/queries/signIn";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const authSchema = z.object({
  email: z.string().min(1, "Please enter a valid email address").email(),
  password: z
    .string()
    .min(1, "Please enter a password")
    .refine(
      (val) => val.length > 3, // /\d/.test(password) && // /[a-z]/.test(password) && // /[A-Z]/.test(val) &&
      // /[!@#$%^&*(),.?":{}|<>]/.test(password),
      {
        message:
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
      }
    ),
});

export default function SigninForm() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(authSchema),
  });
  //! CUSTOM AUTHENTICATION LOGIC (will be implemented later)
  //! CUSTOM AUTHENTICATION WITHOUT NEXT-AUTH
  // const submitHandler = async ({ email: inputEmail, password }) => {
  //   // console.log(formData);
  //   setLoading(true);
  //   try {
  //     const { status, email, name, customerId, message } = await customSignIn(
  //       inputEmail,
  //       password
  //     );
  //     console.log(status, email, name, customerId);
  //     if (message) throw new Error(message);
  //   } catch (err) {
  //     console.log(err.message);
  //     setError("loginError", { type: "manual", message: err.message });
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  //! CUSTOM AUTHENTICATION USING NEXT-AUTH
  const router = useRouter();
  const submitHandler = async ({ email: inputEmail, password }) => {
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        email: inputEmail,
        password,
        redirect: false,
      });
      // inspect the response object of next-auth sign in incase of any confusion
      console.log(response);
      if (response.ok) router.push("/");
      // the error we returned is in the response.error
      setError("loginError", {
        type: "manual",
        message: response.error,
      });
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(submitHandler)}>
      <label className="text-sm font-medium" htmlFor="email">
        Email
      </label>
      <Input
        disabled={loading}
        {...register("email")}
        className="mt-2 mb-2 text-white border border-gray-600 bg-black placeholder:font-thin font-thin"
        id="email"
        placeholder="tumeraputtar@rmail.com"
        type="text"
      />
      {errors.email && (
        <p className="text-xs mb-2 text-red-500">{errors.email.message}</p>
      )}
      <label className="text-sm font-medium" htmlFor="password">
        Password
      </label>
      <Input
        disabled={loading}
        {...register("password")}
        className="mt-2 mb-2 text-white border border-gray-600 bg-black placeholder:font-thin"
        id="password"
        placeholder="****************"
        type="password"
      />
      {errors.password && (
        <p className="text-xs mb-4 text-red-500">{errors.password.message}</p>
      )}
      {errors.loginError && (
        <p className="text-xs mb-4 text-red-500">{errors.loginError.message}</p>
      )}
      <Button disabled={loading} className="mt-2 w-full">
        {loading ? "Loading..." : "Sign in"}
      </Button>
    </form>
  );
}
