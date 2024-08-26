'use client'
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    return (
        <SessionProvider>
            <DashboardContent />
        </SessionProvider>
    );
}

function DashboardContent() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        return (
            <div>
                <p>You are not logged in.</p>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        );
    }

    return (
        <div>
            <p>Welcome, {session.user.email}!</p>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    );
}
