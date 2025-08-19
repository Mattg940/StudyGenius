import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
	constructor(private readonly ai: AiService) {}

	@Post('tutor')
	async tutor(@Body() body: { question: string; contextIds?: string[] }) {
		return { ok: true, data: await this.ai.tutor(body) };
	}

	@Post('snap')
	async snap(@Body() body: { imageUploadUrl?: string; gs?: string; isPro?: boolean }) {
		return { ok: true, data: await this.ai.snap({ imageUploadUrl: body.imageUploadUrl, gsRef: body.gs, isPro: body.isPro }) };
	}
}