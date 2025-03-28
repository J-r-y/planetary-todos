import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ModeToggle";
import { AuthButton } from "./components/AuthButton";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
	weight: '400',
	subsets: ['latin'],
})

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: "Planetary Todos",
	description: "Todo-App with visual rewards for completing",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth()
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${roboto.className} ${poppins.className} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SessionProvider session={session}>
						<ModeToggle />
						<AuthButton />
						{children}
					</SessionProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
