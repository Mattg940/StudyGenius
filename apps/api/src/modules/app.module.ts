import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThreadsModule } from './threads/threads.module';
import { MessagesModule } from './messages/messages.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { AiModule } from './ai/ai.module';
import { BillingModule } from './billing/billing.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ModerationModule } from './moderation/moderation.module';

@Module({
	imports: [
		AuthModule,
		UsersModule,
		ThreadsModule,
		MessagesModule,
		AssignmentsModule,
		SubmissionsModule,
		AiModule,
		BillingModule,
		LeaderboardModule,
		ModerationModule,
	],
})
export class AppModule {}