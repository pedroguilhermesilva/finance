import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { api } from "../../../services/api";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) {
        try {
          const { data } = await api.get(`/users/${user.id}`);
          if (data.id) return true;
        } catch (error) {
          if (error.response.status === 404) {
            const { data } = await api.post(`/users`, { ...user });
            if (data.id) return true;
          } else {
            return false;
          }
        }
      }
    },
    async session(params) {
      const session = {
        ...params.session,
        user: {
          ...params.session.user,
          id: params.token.sub,
        },
      };
      return session;
    },
  },
});
