
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
//import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import type { User } from '@/lib/definitions';
import { authConfig } from './auth.config';
import { jwtVerify } from "jose";

export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }
  return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    return null;
  }
}
async function getUser(email: string): Promise<User | undefined> {
 
  try {
    const user = await sql<User>`SELECT * from USERS where email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = password === user.password//await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;

        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});