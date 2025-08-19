#!/usr/bin/env ts-node
/*
 Seed demo data: users (student/parent/teacher), class, assignment.
*/
import { randomUUID } from 'crypto';

async function main() {
	const teacherId = `t_${randomUUID().slice(0, 6)}`;
	const studentId = `s_${randomUUID().slice(0, 6)}`;
	const parentId = `p_${randomUUID().slice(0, 6)}`;
	const classId = `c_${randomUUID().slice(0, 6)}`;
	const assignmentId = `a_${randomUUID().slice(0, 6)}`;

	console.log('Demo IDs:', { teacherId, studentId, parentId, classId, assignmentId });
	console.log('Write these to Firestore with your preferred admin script.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});