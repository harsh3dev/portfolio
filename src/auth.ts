import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session
    },
  },
})