"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const authSchema = z.object({
  name: z.string().min(6, "Name must be at least 6 characters"),
  email: z.string().min(1, "Please enter a valid email address").email(),
  password: z
    .string()
    .min(1, "Please enter a password")
    .refine((val) => val.length > 4, {
      message:
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
});

export default function SignupForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const submitHandler = (formData) => {
    console.log(formData);
    // Add your custom authentication logic here
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(submitHandler)}>
      <label className="text-sm font-medium" htmlFor="name">
        Name
      </label>
      <Input
        {...register("name")}
        className="mt-2 mb-2 text-white border border-gray-600 bg-black placeholder:font-thin font-thin"
        id="name"
        placeholder="John Doe"
        type="text"
      />
      {errors.name && (
        <p className="text-xs mb-2 text-red-500">{errors.name.message}</p>
      )}

      <label className="text-sm font-medium" htmlFor="email">
        Email
      </label>
      <Input
        {...register("email")}
        className="mt-2 mb-2 text-white border border-gray-600 bg-black placeholder:font-thin font-thin"
        id="email"
        placeholder="john.doe@example.com"
        type="text"
      />
      {errors.email && (
        <p className="text-xs mb-2 text-red-500">{errors.email.message}</p>
      )}

      <label className="text-sm font-medium" htmlFor="password">
        Password
      </label>
      <Input
        {...register("password")}
        className="mt-2 mb-2 text-white border border-gray-600 bg-black placeholder:font-thin"
        id="password"
        placeholder="****************"
        type="password"
      />
      {errors.password && (
        <p className="text-xs mb-4 text-red-500">{errors.password.message}</p>
      )}

      <Button className="mt-2 w-full">Sign up</Button>
    </form>
  );
}