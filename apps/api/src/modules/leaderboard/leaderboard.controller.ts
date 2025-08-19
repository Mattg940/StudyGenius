import { Controller, Get, Param } from '@nestjs/common';

@Controller('leaderboard')
export class LeaderboardController {
	@Get(':scope')
	async get(@Param('scope') scope: string) {
		return { ok: true, data: { scope, top: [{ uid: 'u1', points: 1200 }], updatedAt: Date.now() } };
	}
}