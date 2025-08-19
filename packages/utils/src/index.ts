import dayjs from "dayjs";
import { User, UserRole } from "@study-genius/types";

export function hasRole(user: Pick<User, "role">, allowed: UserRole[]): boolean {
	return allowed.includes(user.role);
}

export function canMessage(sender: User, recipient: User): boolean {
	if (sender.uid === recipient.uid) return false;
	if (sender.role === "student" && recipient.role === "student") return true;
	if (sender.role === "parent" && recipient.role === "teacher") return true;
	if (sender.role === "teacher" && ["student", "parent", "teacher"].includes(recipient.role)) return true;
	if (sender.role === "admin") return true;
	return false;
}

export function calculatePointsForSubmission(status: "submitted" | "graded"): number {
	return status === "graded" ? 20 : 10;
}

export function nextStreakValue(prevStreak: number, lastActiveAtEpochSec: number): number {
	const last = dayjs.unix(lastActiveAtEpochSec);
	const today = dayjs();
	if (today.diff(last, "day") === 0) return prevStreak; // already counted today
	if (today.diff(last, "day") === 1) return prevStreak + 1; // consecutive
	return 1; // reset
}

export type FirestoreTimestamp = number; // epoch seconds

export function nowEpochSec(): number {
	return Math.floor(Date.now() / 1000);
}

export function clamp<T>(value: T, predicate: (v: T) => boolean, fallback: T): T {
	return predicate(value) ? value : fallback;
}