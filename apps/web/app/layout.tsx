import "../styles/globals.css";
import React from "react";
import { t } from "@study-genius/i18n";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const lang = 'en';
	return (
		<html lang={lang}>
			<head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#2563eb" />
				<title>{t('app.title', lang)}</title>
			</head>
			<body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
		</html>
	);
}