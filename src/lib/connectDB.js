import mongoose from "mongoose";

export async function connectDB() {
  const requestURL = `mongodb+srv://muhammadaljoufi:${process.env.DB_PASSWORD}@cluster0.fhnovob.mongodb.net/app`;
  await mongoose.connect(requestURL);
}
