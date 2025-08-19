import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Sentry from '@sentry/node';
import { config } from './config';
import { AuditInterceptor } from './common/interceptors/audit.interceptor';

async function bootstrap() {
	if (config.sentryDsn) {
		Sentry.init({ dsn: config.sentryDsn, tracesSampleRate: 1.0 });
	}
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
	app.useGlobalInterceptors(new AuditInterceptor());

	const swaggerConfig = new DocumentBuilder()
		.setTitle('Study Genius API')
		.setDescription('REST and WebSocket API for Study Genius')
		.setVersion('0.1.0')
		.build();
	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup('docs', app, document);

	await app.listen(4000);
	// eslint-disable-next-line no-console
	console.log('API running at http://localhost:4000 (docs at /docs)');
}

bootstrap();