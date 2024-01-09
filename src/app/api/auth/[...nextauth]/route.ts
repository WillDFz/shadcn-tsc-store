import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from 'next-auth/providers/github';
import { v4 as uuidv4 } from 'uuid';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            
            name: 'Credentials',
          
            credentials: {
                username: { label: 'Usuário', type: 'text' },
                password: { label: 'Senha', type: 'password' },
            },
            async authorize(credentials, req) {
                const userId = uuidv4();
                const user = { id: userId, name: credentials?.username, password: credentials?.password };

                if (user) {
                    return user;
                } else {
                    return null;

                }
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
});

export { handler as GET, handler as POST };
