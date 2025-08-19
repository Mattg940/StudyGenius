"use client";
import { useState } from "react";
import Link from "next/link";

const roles = ["student", "parent", "teacher"] as const;

export default function Onboarding() {
	const [role, setRole] = useState<(typeof roles)[number] | null>(null);
	return (
		<main className="mx-auto max-w-xl p-6">
			<h2 className="text-2xl font-semibold mb-4">Choose your role</h2>
			<div className="flex gap-2 mb-6">
				{roles.map((r) => (
					<button
						key={r}
						className={`px-4 py-2 rounded border ${role === r ? "bg-blue-600 text-white" : "bg-white"}`}
						onClick={() => setRole(r)}
					>
						{r}
					</button>
				))}
			</div>
			<Link href="/auth" className={`underline ${!role ? "pointer-events-none opacity-50" : "text-blue-600"}`}>
				Continue
			</Link>
		</main>
	);
}