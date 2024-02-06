// export {GET,POST} from "@/auth";
//! CURRENTLY LEARNING THE v4 OF THE NEXT AUTH
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../../db/schema/usersSchema";
import { generateCustomerID } from "@/lib/utils";
import { connectDB } from "../../../../../db/connectDB";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // call,
};

export const handler = NextAuth({
  ...authOptions,
  callbacks: {
    async jwt({ token, account }) {
      // i want to include the id as an extra property, so first i need to check if the user is already registred, if not then create one
      connectDB();
      const customer = await User.findOne({ email: token.email })
        .select({ id: 1 })
        .lean();
      const customerId = customer?.id || "";
      console.log(customerId);
      // if not present, then generate a new one and save it to the database
      let newCustomerId;
      if (!customerId) {
        newCustomerId = generateCustomerID();

        await User.create({
          name: token.name,
          email: token.email,
          id: newCustomerId,
        });
      }

      if (account) {
        // token.extraProperty = "da da zama da taraf na";
        token.customerId = newCustomerId || customerId;
      }
      return token;
    },
    session({ session, token }) {
      // session.user.extraProperty = token.extraProperty;
      session.user.customerId = token.customerId;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
