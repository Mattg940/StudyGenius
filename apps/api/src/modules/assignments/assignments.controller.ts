import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
	@Post()
	async create(@Body() body: { classId: string; title: string; instructions: string; dueAt: number }) {
		return { ok: true, data: { id: 'a_demo', ...body } };
	}

	@Get()
	async list(@Query('classId') classId?: string) {
		return { ok: true, data: [{ id: 'a_demo', classId: classId ?? 'c_demo', title: 'Sample', instructions: 'Do it', dueAt: Date.now() + 86400_000 }] };
	}
}