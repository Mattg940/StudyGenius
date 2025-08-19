export const dynamic = "force-dynamic";

async function tutor(question: string) {
	const res = await fetch('http://localhost:4000/ai/tutor', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ question }),
		cache: 'no-store'
	});
	return res.json();
}

export default async function TutorPage() {
	const data = await tutor('How do I solve 2x + 3 = 7?');
	const t = data.data;
	return (
		<main className="mx-auto max-w-3xl p-6">
			<h2 className="text-2xl font-semibold mb-4">AI Tutor</h2>
			<div className="rounded bg-white p-4 shadow space-y-2">
				<div><span className="font-semibold">Diagnosis:</span> {t.diagnosis}</div>
				<div>
					<span className="font-semibold">Steps:</span>
					<ol className="list-decimal ml-6">
						{t.steps.map((s: string, i: number) => <li key={i}>{s}</li>)}
					</ol>
				</div>
				<div><span className="font-semibold">Hint:</span> {t.hint}</div>
				<div><span className="font-semibold">Questions:</span> {t.questions.join(', ')}</div>
				<div><span className="font-semibold">Verification:</span> {t.verification}</div>
				<div><span className="font-semibold">Summary:</span> {t.summary}</div>
			</div>
		</main>
	);
}