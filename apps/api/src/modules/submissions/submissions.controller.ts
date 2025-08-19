import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('submissions')
export class SubmissionsController {
	@Post()
	async create(@Body() body: { assnId: string; studentId: string; content?: string }) {
		return { ok: true, data: { id: 's_demo', status: 'submitted', ...body } };
	}

	@Get()
	async list(@Query('assnId') assnId?: string, @Query('studentId') studentId?: string) {
		return { ok: true, data: [{ id: 's_demo', assnId: assnId ?? 'a_demo', studentId: studentId ?? 'u1', status: 'submitted' }] };
	}

	@Patch(':id')
	async grade(@Param('id') id: string, @Body() body: { grade: number; feedback?: string }) {
		return { ok: true, data: { id, status: 'graded', grade: body.grade, feedback: body.feedback } };
	}
}