import mongoose from "mongoose";

// maintaining a cached connection to prevent reconnection
let cached = global.mongoose;
// reset the connection if it doesnt exist
if (!cached) {
  cached = global.mongoose = null;
}

export async function connectDB() {
  // return the cache if it exists
  if (cached) {
    return cached;
  }
  // make the connection and cache it
  const requestURL = `mongodb+srv://muhammadaljoufi:${process.env.DB_PASSWORD}@cluster0.fhnovob.mongodb.net/app`;
  cached = await mongoose.connect(requestURL);
  return cached;
}
