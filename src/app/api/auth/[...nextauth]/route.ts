import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  //For Middleware
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     return url.startsWith(baseUrl) ? url : baseUrl;
  //     // return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`;
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
