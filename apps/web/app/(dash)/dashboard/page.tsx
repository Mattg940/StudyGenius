import Link from "next/link";

export default function Dashboard() {
	return (
		<div className="grid gap-3">
			<h2 className="text-2xl font-semibold">Dashboard</h2>
			<div className="grid grid-cols-2 gap-3">
				<Link className="text-blue-600 underline" href="/chat">Chat</Link>
				<Link className="text-blue-600 underline" href="/classes">Classes</Link>
				<Link className="text-blue-600 underline" href="/assignments">Assignments</Link>
				<Link className="text-blue-600 underline" href="/leaderboard">Leaderboard</Link>
			</div>
		</div>
	);
}