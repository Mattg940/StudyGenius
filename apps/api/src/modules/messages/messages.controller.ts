import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('threads/:id/messages')
export class MessagesController {
	@Get()
	async list(@Param('id') id: string, @Query('after') after?: string) {
		return { ok: true, data: [{ id: 'm1', threadId: id, text: 'Welcome!', createdAt: Date.now() }] };
	}

	@Post()
	async create(
		@Param('id') id: string,
		@Body() body: { text?: string; mediaRef?: string; senderId?: string }
	) {
		return { ok: true, data: { id: 'm_new', threadId: id, ...body, createdAt: Date.now() } };
	}
}