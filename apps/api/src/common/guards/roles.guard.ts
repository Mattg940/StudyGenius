import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, AppRole } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const required = this.reflector.getAllAndOverride<AppRole[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass(),
		]);
		if (!required || required.length === 0) return true;
		const req = context.switchToHttp().getRequest();
		const userRole: AppRole | undefined = req.user?.role || req.headers['x-role'];
		if (!userRole) return false;
		if (userRole === 'admin') return true;
		return required.includes(userRole as AppRole);
	}
}