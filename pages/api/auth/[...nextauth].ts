import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'admin'
      return token
    },
  },
  secret: '8c00f4b986eaa31be0d65fc3866c1e26',
}

export default NextAuth(authOptions)
