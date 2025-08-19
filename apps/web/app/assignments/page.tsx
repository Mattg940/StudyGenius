export const dynamic = "force-dynamic";

async function fetchJSON(path: string, init?: RequestInit) {
	const res = await fetch(`http://localhost:4000${path}`, { ...init, cache: 'no-store' });
	return res.json();
}

export default async function AssignmentsPage() {
	const list = await fetchJSON('/assignments');
	return (
		<main className="mx-auto max-w-3xl p-6">
			<h2 className="text-2xl font-semibold mb-4">Assignments</h2>
			<ul className="space-y-2">
				{list.data.map((a: any) => (
					<li key={a.id} className="rounded bg-white p-3 shadow">
						<div className="font-medium">{a.title}</div>
						<div className="text-sm text-gray-600">{a.instructions}</div>
					</li>
				))}
			</ul>
		</main>
	);
}