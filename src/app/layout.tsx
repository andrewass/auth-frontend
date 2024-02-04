import type {Metadata} from 'next'
import './globals.css'
import React from "react";
import SessionProvider from "@/app/session/SessionProvider";
import {getServerSession} from "next-auth";
import Footer from "@/app/(navigation)/components/footer/Footer";


export const metadata: Metadata = {
    title: "Custom Auth",
    description: "Custom Auth Application",
}

export default async function RootLayout({children,}: { children: React.ReactNode }) {
    const session = await getServerSession();

    return (
        <html lang="en">
        <body>
        <SessionProvider session={session}>
            <main>
                {children}
                <Footer/>
            </main>
        </SessionProvider>
        </body>
        </html>
    );
}
