import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials", 
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await axios.post("http://localhost:5000/api/user/login", credentials);
                const user = res.data;

                if (user?.message) {
                    throw new Error(user.message);
                }

                if (!user) {
                    throw new Error("Login failed");
                }

                return user
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    pages: {
        signIn: '/auth-login',
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account) {
                const {providerAccountId, provider } = account;
                const {email: user_email, image, name} = user;
                const userInfo= {email:user_email, image, name, providerAccountId, provider};
                const res = await axios.post("http://localhost:5000/api/user/social-login", userInfo);
            }
            return true
        },
    }
}