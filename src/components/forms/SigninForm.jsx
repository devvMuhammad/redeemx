import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export default function SigninForm() {
  return (
    <form className="mt-6">
      <label className="block text-sm font-medium" htmlFor="email">
        Email
      </label>
      <Input
        className="mt-2 mb-4 text-white bg-black placeholder:font-thin"
        id="email"
        placeholder="tumeraputtar@rmail.com"
        type="text"
      />
      <label className="block text-sm font-medium" htmlFor="password">
        Password
      </label>
      <Input
        className="mt-2 mb-6 text-white bg-black placeholder:font-thin"
        id="password"
        placeholder="****************"
        type="password"
      />
      <Button className="w-full">Sign in</Button>
    </form>
  );
}
