import NextAuth, {AuthOptions} from "next-auth";


export const authOptions: AuthOptions = {
    providers: [
        {
            id: "customauth",
            name: "CustomAuth",
            type: "oauth",
            authorization: "http://localhost:3000/authentication",
            token: process.env.AUTH_SERVER_URL+"/token/token",
            idToken: true,
            checks: ["pkce", "state"],
            profile(profile: any) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                }
            },
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }
    ],
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};