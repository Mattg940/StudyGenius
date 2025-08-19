export const dynamic = "force-dynamic";

async function fetchJSON(path: string) {
	const res = await fetch(`http://localhost:4000${path}`, { cache: 'no-store' });
	return res.json();
}

export default async function ChatPage() {
	const threads = await fetchJSON('/threads?memberId=u_demo');
	const thread = threads.data[0];
	const messages = await fetchJSON(`/threads/${thread.id}/messages`);
	return (
		<main className="mx-auto max-w-3xl p-6">
			<h2 className="text-2xl font-semibold mb-4">Chat</h2>
			<div className="mb-2">Thread: {thread.id}</div>
			<ul className="space-y-2">
				{messages.data.map((m: any) => (
					<li key={m.id} className="rounded bg-white p-3 shadow">
						{m.text}
					</li>
				))}
			</ul>
		</main>
	);
}