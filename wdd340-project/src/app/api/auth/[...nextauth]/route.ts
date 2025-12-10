import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import postgres from "postgres"

export const runtime = "nodejs"

// PostgreSQL connection setup
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" })

// NextAuth.js options configuration
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { 
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Incorrect username or password")
          }

          // Fetch the user from PostgreSQL database
          const result = await sql`
            SELECT id, email, password, name
            FROM users
            WHERE email = ${credentials.email}
            LIMIT 1
          `
          const user = result[0]

          // If user is not found, throw error
          if (!user) throw new Error("Incorrect username or password")

          // Compare the hashed password with the provided password
          const isValid = await compare(credentials.password, user.password)
          if (!isValid) throw new Error("Incorrect username or password")

          // Return user object to be included in the JWT token
          return { id: user.id, email: user.email, name: user.name }
        } catch (err: any) {
          console.error("Error during user authorization:", err)
          // Throw the error to be handled by NextAuth
          throw new Error(err.message || "Authentication error")
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = session.user || {}
        session.user.email = token.email
        session.user.name = token.name
      }
      return session
    }
  }
}

// NextAuth handler
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
