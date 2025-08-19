import Link from "next/link";
import { t } from "@study-genius/i18n";

export default function Page() {
	const lang = 'en';
	return (
		<main className="mx-auto max-w-3xl p-8">
			<h1 className="text-3xl font-bold mb-2">{t('app.title', lang)}</h1>
			<p className="text-gray-600 mb-6">{t('app.tagline', lang)}</p>
			<div className="grid gap-3">
				<Link className="underline text-blue-600" href="/onboarding">{t('onboarding.getStarted', lang)}</Link>
				<nav className="flex gap-4 text-sm">
					<Link href="/chat" className="underline">{t('nav.chat', lang)}</Link>
					<Link href="/assignments" className="underline">{t('nav.assignments', lang)}</Link>
					<Link href="/leaderboard" className="underline">{t('nav.leaderboard', lang)}</Link>
				</nav>
			</div>
		</main>
	);
}