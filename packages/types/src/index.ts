import { z } from "zod";

export const UserRoleSchema = z.enum(["student", "parent", "teacher", "admin"]);
export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserProfileSchema = z.object({
	displayName: z.string().min(1),
	photoURL: z.string().url().optional().nullable(),
	bio: z.string().max(280).optional().nullable()
});

export const UserSchema = z.object({
	uid: z.string(),
	role: UserRoleSchema,
	profile: UserProfileSchema,
	linkedParentIds: z.array(z.string()).default([]),
	linkedStudentIds: z.array(z.string()).default([]),
	streak: z.number().int().nonnegative().default(0),
	points: z.number().int().nonnegative().default(0),
	entitlements: z.object({
		snapPro: z.boolean().default(false)
	}).default({ snapPro: false }),
	createdAt: z.number().int().optional(),
	updatedAt: z.number().int().optional()
});
export type User = z.infer<typeof UserSchema>;

export const ClassSchema = z.object({
	id: z.string(),
	name: z.string().min(1),
	schoolId: z.string().optional().nullable(),
	teacherId: z.string(),
	roster: z.array(z.string()).default([]),
	invites: z.array(z.string()).default([]),
	createdAt: z.number().int().optional(),
	updatedAt: z.number().int().optional()
});
export type Class = z.infer<typeof ClassSchema>;

export const AssignmentSchema = z.object({
	id: z.string(),
	classId: z.string(),
	title: z.string().min(1),
	instructions: z.string().min(1),
	dueAt: z.number().int(),
	rubric: z.record(z.string(), z.any()).optional().default({}),
	attachments: z.array(z.string()).default([]),
	createdAt: z.number().int().optional(),
	updatedAt: z.number().int().optional()
});
export type Assignment = z.infer<typeof AssignmentSchema>;

export const SubmissionStatusSchema = z.enum(["draft", "submitted", "graded"]);
export const SubmissionSchema = z.object({
	id: z.string(),
	assnId: z.string(),
	studentId: z.string(),
	status: SubmissionStatusSchema,
	grade: z.number().min(0).max(100).optional(),
	feedback: z.string().optional(),
	aiHelpTraceId: z.string().optional(),
	createdAt: z.number().int().optional(),
	updatedAt: z.number().int().optional()
});
export type Submission = z.infer<typeof SubmissionSchema>;

export const ThreadTypeSchema = z.enum(["student-chat", "parent-teacher", "class-feed"]);
export const ThreadSchema = z.object({
	id: z.string(),
	type: ThreadTypeSchema,
	memberIds: z.array(z.string()).min(1),
	lastAt: z.number().int(),
	createdAt: z.number().int().optional(),
	updatedAt: z.number().int().optional()
});
export type Thread = z.infer<typeof ThreadSchema>;

export const MessageSchema = z.object({
	id: z.string(),
	threadId: z.string(),
	senderId: z.string(),
	text: z.string().optional(),
	mediaRef: z.string().optional(),
	isSystem: z.boolean().default(false),
	createdAt: z.number().int(),
	moderation: z.object({
		flagged: z.boolean().default(false),
		reason: z.string().optional()
	}).default({ flagged: false })
});
export type Message = z.infer<typeof MessageSchema>;

export const LeaderboardScopeSchema = z.string();
export const LeaderboardEntrySchema = z.object({ uid: z.string(), points: z.number().int().nonnegative() });
export const LeaderboardSchema = z.object({
	scope: z.string(),
	top: z.array(LeaderboardEntrySchema),
	updatedAt: z.number().int()
});
export type Leaderboard = z.infer<typeof LeaderboardSchema>;

export const SnapJobStatusSchema = z.enum(["queued", "processing", "done", "rejected"]);
export const SnapJobSchema = z.object({
	id: z.string(),
	userId: z.string(),
	status: SnapJobStatusSchema,
	inputRef: z.string(),
	resultRef: z.string().optional(),
	costCents: z.number().int().optional(),
	proOnly: z.boolean().default(true),
	createdAt: z.number().int().optional(),
	updatedAt: z.number().int().optional()
});
export type SnapJob = z.infer<typeof SnapJobSchema>;

export const PaginationQuerySchema = z.object({
	limit: z.number().int().min(1).max(100).default(25),
	after: z.string().optional()
});
export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;

export const ApiResponseSchema = <T extends z.ZodTypeAny>(data: T) =>
	z.object({ ok: z.boolean(), data, error: z.string().nullable().optional() });

export type FirestoreDoc<T> = T & { id: string };