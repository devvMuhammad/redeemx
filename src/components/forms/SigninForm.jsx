"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const authSchema = z.object({
  email: z.string().min(1, "Please enter a valid email address").email(),
  password: z
    .string()
    .min(1, "Please enter a password")
    .refine(
      (val) =>
        val.length > 8 &&
        /[A-Z]/.test(val) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ),
});

export default function SigninForm() {
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(authSchema),
  });
  //! CUSTOM AUTHENTICATION LOGIC (will be implemented later)
  const submitHandler = (form) => {};

  return (
    <form className="mt-6" onSubmit={handleSubmit(submitHandler)}>
      <label className="text-sm font-medium" htmlFor="email">
        Email
      </label>
      <Input
        {...register("email")}
        className="mt-2 mb-4 text-white border border-gray-600 bg-black placeholder:font-thin font-thin"
        id="email"
        placeholder="tumeraputtar@rmail.com"
        type="text"
      />
      <label className="text-sm font-medium" htmlFor="password">
        Password
      </label>
      <Input
        {...register("password")}
        className="mt-2 mb-6 text-white border border-gray-600 bg-black placeholder:font-thin"
        id="password"
        placeholder="****************"
        type="password"
      />
      <Button className="w-full">Sign in</Button>
    </form>
  );
}
