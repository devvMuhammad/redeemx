"use server";
import bcrypt from "bcrypt";
import User from "../schema/usersSchema";
import { connectDB } from "../connectDB";

export async function customSignIn(inputEmail, password) {
  await connectDB();
  try {
    const existingUser = await User.findOne({ email: inputEmail });
    if (!existingUser) throw new Error("User with this email does not exist");

    const { password: hashedPassword, name, email, id } = existingUser;

    if (!hashedPassword)
      throw new Error("User is registered with another provider");

    const isCorrect = await bcrypt.compare(password, hashedPassword);
    if (!isCorrect) throw new Error("The password you entered is incorrect");

    return { status: "success", name, email, customerId: id };
  } catch (err) {
    console.log(err.message);
    return { status: "failure", message: err.message };
  }
}
