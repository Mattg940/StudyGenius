"use client";

export default function ThemeToggle() {
	return (
		<button
			onClick={() => {
				document.documentElement.classList.toggle('dark');
			}}
			className="fixed bottom-4 right-4 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 px-3 py-2 shadow"
		>
			Theme
		</button>
	);
}