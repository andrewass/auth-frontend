import type { Metadata } from "next";
import "./globals.css";
import type React from "react";
import NavigationHeader from "@/app/header/NavigationHeader";
import LeftMenu from "@/app/leftmenu/LeftMenu";
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
					<div className="flex flex-col h-screen">
						<NavigationHeader />
						<div className="flex flex-row h-screen">
							<div className="w-60">
								<LeftMenu />
							</div>
							<div className="divider divider-horizontal m-0 w-0" />
							<main className="flex-1">{children}</main>
						</div>
					</div>
				</SessionProvider>
			</body>
		</html>
	);
}
