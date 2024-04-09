import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "bonesydesign.com",
		template: "%s | bonesydesign.com",
	},
	description: "Founder of bonesydesign.com and Co-founder of Altered Avarice",
	openGraph: {
		title: "bonesydesign.com",
		description:
			"Founder of bonesydesign.com and Co-founder of Altered Avarice",
		url: "https://bonesydesign.com",
		siteName: "bonesydesign.com",
		images: [
			{
				url: "https://github.com/TreeNerd512/nextjs-portfolio/blob/589bbf1c34255ecbb8316d82f395bf44e7608cfd/public/favicon.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "B0N3SY.ETH",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-charcoal ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
