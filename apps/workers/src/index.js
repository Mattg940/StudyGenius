import fetch from 'node-fetch';

async function runNightlyLeaderboard() {
	// placeholder: fetch points and write to Redis
	console.log('[workers] running nightly leaderboard aggregate');
}

async function runStreakMaintenance() {
	console.log('[workers] running streak maintenance');
}

async function runModerationRecheck() {
	console.log('[workers] running moderation re-check');
}

export async function main() {
	await runNightlyLeaderboard();
	await runStreakMaintenance();
	await runModerationRecheck();
}

if (require.main === module) {
	main();
}