import type { Metadata } from "next";
import { Inter, Poppins, Syne, Philosopher } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
	variable: "--font-inter",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "ApiLogger",
	description: "Convex Powered Api Request Logger",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${poppins.variable}`}>
				{children}
			</body>
		</html>
	);
}
