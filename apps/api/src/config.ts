export const config = {
	sentryDsn: process.env.SENTRY_DSN || '',
	redisUrl: process.env.UPSTASH_REDIS_REST_URL || process.env.REDIS_URL || '',
	rateLimitPoints: parseInt(process.env.RATE_LIMIT_POINTS || '60', 10),
	rateLimitDurationSec: parseInt(process.env.RATE_LIMIT_DURATION_SEC || '60', 10),
};