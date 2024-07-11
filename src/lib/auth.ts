import  CredentialsProvider  from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from "./db";
import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth";


export const AuthOpations: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_SECRET,
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          name: { label: "Username", type: "text" },
          password: {label: "Password", type: "password"},
        },
        async authorize(credentials) {
          if(!credentials?.name || !credentials?.password) {
            return null;
          }
          const user = await prisma.user.findFirst({
            where: {name: credentials.name},
          });
          if(user && bcrypt.compareSync(credentials.password, user.password!)) {
            return user;
          }
          return null;
        },
      }) 
    ],
    callbacks: {
      async signIn({user, account}) {
        const result = await prisma.user.findFirst({
          where: {name: user?.name},
        });
        if(account?.provider === "google") {
          if(!result) {
            await prisma.user.create({
              data: {
                name: user.name!,
                email: user.email!,
                image: user.image!,
              },
            });
          }
        }
        return true;
      },
    async session({token, session}) {
        if(session.user) {
          session.user.id = String(token.uid)
        }
        return session;
      },   
      async jwt({token, user}) {
        if(user) {
          const ResponseDB = await prisma.user.findUnique({
            where: {email:token.email!},
          });
          token.uid = user.id;
          token.name = (ResponseDB?.name)
        }
        return token;
    }
}
}
