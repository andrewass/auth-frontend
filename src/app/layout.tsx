import type { Metadata } from "next";
import "./globals.css";
import type React from "react";
import SessionProvider from "@/app/session/SessionProvider";
import { auth } from "@/auth";

export const metadata: Metadata = {
	title: "Custom Auth",
	description: "Custom Auth Application",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	return (
		<html lang="en">
			<body>
				<SessionProvider session={session}>
					<main>{children}</main>
				</SessionProvider>
			</body>
		</html>
	);
}
