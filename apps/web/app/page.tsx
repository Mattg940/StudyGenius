import Link from "next/link";

export default function Page() {
	return (
		<main className="mx-auto max-w-3xl p-8">
			<h1 className="text-3xl font-bold mb-2">Study Genius</h1>
			<p className="text-gray-600 mb-6">All-in-one learning: AI-guided tutor, chat, assignments, and more.</p>
			<div className="grid gap-3">
				<Link className="underline text-blue-600" href="/onboarding">Get started</Link>
			</div>
		</main>
	);
}