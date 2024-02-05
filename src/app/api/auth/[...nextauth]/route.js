// export {GET,POST} from "@/auth";
//! CURRENTLY LEARNING THE v4 OF THE NEXT AUTH
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// export default NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
// });

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
