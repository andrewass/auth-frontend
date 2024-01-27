import NextAuth, {AuthOptions} from "next-auth";


export const authOptions: AuthOptions = {
    providers: [
        {
            id: "customauth",
            name: "CustomAuth",
            type: "oauth",
            issuer: "http://auth-backend-service:80",
            authorization: process.env.AUTH_FRONTEND_URL + "/authentication",
            token: process.env.AUTH_SERVER_URL + "/token/token",
            userinfo: process.env.AUTH_SERVER_URL + "/user/info",
            idToken: true,
            jwks_endpoint: process.env.AUTH_SERVER_URL+"/.well-known/jwks.json",
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

export {handler as GET, handler as POST};