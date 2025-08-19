import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	async me() {
		return { ok: true, data: { uid: 'demo-user', role: 'student' } };
	}
}