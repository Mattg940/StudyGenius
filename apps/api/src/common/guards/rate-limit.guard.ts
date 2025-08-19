import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import Redis from 'ioredis';
import { config } from '../../config';

@Injectable()
export class RateLimitGuard implements CanActivate {
	private limiter: RateLimiterRedis | null = null;

	private getLimiter() {
		if (!this.limiter) {
			const redis = new Redis(config.redisUrl);
			this.limiter = new RateLimiterRedis({
				storeClient: redis,
				points: config.rateLimitPoints,
				duration: config.rateLimitDurationSec,
				keyPrefix: 'rlflx'
			});
		}
		return this.limiter;
	}

	async canActivate(ctx: ExecutionContext): Promise<boolean> {
		const req = ctx.switchToHttp().getRequest();
		const ip = req.ip || req.headers['x-forwarded-for'] || 'anon';
		try {
			await this.getLimiter().consume(String(ip));
			return true;
		} catch {
			return false;
		}
	}
}