import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('threads')
export class ThreadsController {
	@Post()
	async create(@Body() body: { type: string; memberIds: string[] }) {
		return { ok: true, data: { id: 't_demo', ...body } };
	}

	@Get()
	async list(@Query('memberId') memberId?: string) {
		const data = [{ id: 't_demo', type: 'student-chat', memberIds: [memberId ?? 'u_demo'], lastAt: Date.now() }];
		return { ok: true, data };
	}
}