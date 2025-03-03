import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} ${poppins.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
