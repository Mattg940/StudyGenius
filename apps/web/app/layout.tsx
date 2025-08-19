import "../styles/globals.css";
import React from "react";
import { t } from "@study-genius/i18n";
import ThemeToggle from "../components/ThemeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const lang = 'en';
	const dir = ['ar'].includes(lang) ? 'rtl' : 'ltr';
	return (
		<html lang={lang} dir={dir}>
			<head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#2563eb" />
				<title>{t('app.title', lang)}</title>
			</head>
			<body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
				{children}
				<ThemeToggle />
			</body>
		</html>
	);
}