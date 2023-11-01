import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

// FONTS
const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-space_grotesk",
});

// Metadata
export const metadata: Metadata = {
	title: "Devflow",
	description: "Clone of StackOverflow",
	icons: { icon: "/assets/images/site-logo.svg" },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// Provides active session and user context to Clerk's hooks
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: "primary-gradient",
					formActionLink: "primary-text-gradient hover:text-primary-500",
				},
			}}>
			<html lang="en">
				<body className={`${inter.variable} ${spaceGrotesk.variable}`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
