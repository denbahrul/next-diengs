// /pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
    providers: [
        CredentialsProvider({
            // Menyediakan custom login menggunakan credentials
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    // Panggil API login yang sudah dibuat
                    const res = await axios.post('http://localhost:8000/v1/users/login', {
                        email: credentials.email,
                        password: credentials.password
                    });

                    const user = res.data;

                    if (user) {
                        // Jika berhasil login, kembalikan data user
                        return user;
                    } else {
                        // Kembalikan null jika login gagal
                        return null;
                    }
                } catch (error) {
                    throw new Error('Invalid email or password');
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            return session;
        }
    },
    pages: {
        signIn: '/auth/signin', // Custom sign in page
    },
    secret: process.env.NEXTAUTH_SECRET, // Secret untuk enkripsi token
});
