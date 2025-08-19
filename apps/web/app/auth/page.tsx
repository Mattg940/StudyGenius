"use client";
import { useEffect } from "react";

export default function AuthPage() {
	useEffect(() => {
		// Placeholder for FirebaseUI init
	}, []);
	return (
		<main className="mx-auto max-w-xl p-6">
			<h2 className="text-2xl font-semibold mb-4">Sign in</h2>
			<div id="firebaseui-auth-container" />
		</main>
	);
}