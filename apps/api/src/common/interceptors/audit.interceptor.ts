import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import admin from 'firebase-admin';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const req = context.switchToHttp().getRequest();
		const userId = req.user?.uid || req.headers['x-user-id'] || 'anonymous';
		const action = `${req.method} ${req.originalUrl || req.url}`;
		const payload = req.body;
		const startedAt = Date.now();
		return next.handle().pipe(
			tap(async (res) => {
				const durationMs = Date.now() - startedAt;
				// Log structured
				// eslint-disable-next-line no-console
				console.log(JSON.stringify({ type: 'audit', userId, action, durationMs }));
				try {
					if (!admin.apps.length) admin.initializeApp();
					await admin.firestore().collection('auditLogs').add({
						userId,
						action,
						payload,
						responseOk: !!res?.ok,
						createdAt: admin.firestore.FieldValue.serverTimestamp(),
					});
				} catch {}
			})
		);
	}
}