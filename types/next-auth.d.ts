import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: number
      username: string
      email: string
      firstName: string
      lastName: string
      gender: string
      image: string
      token: string
    }    
  }
}