import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/UserModel";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        const user = await User.findOne({ email: email });
        const isMatched = await bcrypt.compare(password, user.password);
        if (isMatched) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
});

export { handler as GET, handler as POST };
