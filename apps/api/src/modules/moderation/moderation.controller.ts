import { Body, Controller, Post } from '@nestjs/common';

@Controller('moderation')
export class ModerationController {
	@Post('report')
	async report(@Body() body: { messageId?: string; userId?: string; threadId?: string }) {
		return { ok: true, data: { received: true, ...body } };
	}
}