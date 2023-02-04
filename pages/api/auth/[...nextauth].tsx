import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      })
  ], 


  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true
    // }
    async signIn({ user, account, profile, email, credentials}){
      // throw "KACHOW"
      if (account.provider === "google"){
        console.log("kachow")
        return profile.email_verified && profile.email.endsWith("@gmail.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    }

  //   async signIn({ account, profile}){
  //     if (account.provider === "google"){
  //       return profile.email_verified && profile.email.endsWith("@gmail.com")
  //     }
  //     return true // Do different verification for other providers that don't have `email_verified`
  //   }
      
  // }
  }
}
export default NextAuth(authOptions)