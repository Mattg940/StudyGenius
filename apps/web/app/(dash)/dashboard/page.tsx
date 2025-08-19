import Link from "next/link";
import { t } from "@study-genius/i18n";

export default function Dashboard() {
	const lang = 'en';
	return (
		<div className="grid gap-3">
			<h2 className="text-2xl font-semibold">{t('app.title', lang)} Dashboard</h2>
			<div className="grid grid-cols-2 gap-3">
				<Link className="rounded bg-white dark:bg-gray-800 shadow p-4" href="/chat">
					<div className="font-medium">{t('nav.chat', lang)}</div>
					<div className="text-sm text-gray-600 dark:text-gray-300">Messages and study groups</div>
				</Link>
				<Link className="rounded bg-white dark:bg-gray-800 shadow p-4" href="/assignments">
					<div className="font-medium">{t('nav.assignments', lang)}</div>
					<div className="text-sm text-gray-600 dark:text-gray-300">Create and submit</div>
				</Link>
				<Link className="rounded bg-white dark:bg-gray-800 shadow p-4" href="/leaderboard">
					<div className="font-medium">{t('nav.leaderboard', lang)}</div>
					<div className="text-sm text-gray-600 dark:text-gray-300">Points and streaks</div>
				</Link>
			</div>
		</div>
	);
}