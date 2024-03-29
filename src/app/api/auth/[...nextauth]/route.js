import User from "@/app/(models)/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDb();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.error("Error:", error);
        }
      },
    }),
  ],
  strategy: "jwt",
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/Home",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
