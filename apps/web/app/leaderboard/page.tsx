export const dynamic = "force-dynamic";

async function fetchJSON(path: string) {
	const res = await fetch(`http://localhost:4000${path}`, { cache: 'no-store' });
	return res.json();
}

export default async function LeaderboardPage() {
	const lb = await fetchJSON('/leaderboard/global');
	return (
		<main className="mx-auto max-w-3xl p-6">
			<h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
			<ul className="space-y-2">
				{lb.data.top.map((e: any, i: number) => (
					<li key={e.uid} className="flex items-center justify-between rounded bg-white p-3 shadow">
						<span>#{i + 1} {e.uid}</span>
						<span className="font-mono">{e.points} pts</span>
					</li>
				))}
			</ul>
		</main>
	);
}