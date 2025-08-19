import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	@Post('link-parent')
	async linkParent(@Body() body: { childUid: string }) {
		return { ok: true, data: { linked: true, childUid: body.childUid } };
	}
}