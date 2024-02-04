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
  const { handleSubmit } = useForm({
    resolver: zodResolver(authSchema),
  });
  return (
    <form className="mt-6">
      <label className="block text-sm font-medium" htmlFor="email">
        Email
      </label>
      <Input
        className="mt-2 mb-4 text-white border border-gray-600 bg-black placeholder:font-thin font-thin"
        id="email"
        placeholder="tumeraputtar@rmail.com"
        type="text"
      />
      <label className="block text-sm font-medium" htmlFor="password">
        Password
      </label>
      <Input
        className="mt-2 mb-6 text-white border border-gray-600 bg-black placeholder:font-thin"
        id="password"
        placeholder="****************"
        type="password"
      />
      <Button className="w-full">Sign in</Button>
    </form>
  );
}
