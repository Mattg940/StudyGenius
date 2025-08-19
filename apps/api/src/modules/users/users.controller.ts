import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
	constructor(private readonly users: UsersService) {}

	@Get('me')
	async me() {
		return this.users.me();
	}
}