import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class TenantGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const req = context.switchToHttp().getRequest();
		const tenantId = req.headers['x-tenant-id'];
		if (!tenantId) return false;
		req.tenantId = tenantId;
		return true;
	}
}