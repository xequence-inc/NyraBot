import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: { params: { scope: 'identify guilds' } }, // Request guilds scope
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.id;
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth/error', 
  }
});

export { handler as GET, handler as POST };
