
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      //console.log("isLoggedin", isLoggedIn)
      //console.log("isOnDashboard", isOnDashboard)
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unathenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        console.log("accpunt:", account)
        token.accessToken = account.access_token
        
      }
      //console.log("token:",token)
      //console.log("rest:",rest)
      return token
    },
    async session({ session, token, user }) {
      console.log("session",session)
      console.log("token",token)
      console.log("user",user)
      // Send properties to the client, like an access_token from a provider.
      //session.accessToken = token.accessToken
      return session
    },
    
  },
  
} satisfies NextAuthConfig;