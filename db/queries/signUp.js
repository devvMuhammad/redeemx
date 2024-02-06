"use server";
import { generateCustomerID } from "@/lib/utils";
import { connectDB } from "../connectDB";
import User from "../schema/usersSchema";
import bcrypt from "bcrypt";

export async function signUp(name, email, password) {
  // const {  name, email, password } = req.body;
  await connectDB();
  try {
    const existingEmail = await User.findOne({ email });

    if (existingEmail) throw new Error("User with this email already exists");
    // k;
    const id = generateCustomerID();
    const hashedPassword = bcrypt.hashSync(password, 10);
    await User.create({ name, email, password: hashedPassword, id });

    return {
      status: "success",
      message: "User signed up successfully.",
      data: { name, email, id },
    };
  } catch (err) {
    console.error(err.message);
    return {
      status: "failure",
      message: err.message,
    };
  }
}
