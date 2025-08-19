import { Injectable } from '@nestjs/common';

type TutorRequest = { question: string; contextIds?: string[] };

type SnapRequest = { imageUploadUrl?: string; gsRef?: string; isPro?: boolean };

@Injectable()
export class AiService {
	async tutor(req: TutorRequest) {
		// Apply guardrails: convert to hints/questions; never return final numeric answers
		return {
			diagnosis: 'Placeholder diagnosis',
			steps: ['Identify knowns', 'Set up equation'],
			questions: ['What is being asked?', 'What formula applies?'],
			hint: 'Consider isolating the variable.',
			verification: 'Check units and plug back in.',
			summary: 'We practiced breaking down the problem and verifying steps.'
		};
	}

	async snap(req: SnapRequest) {
		const pro = !!req.isPro;
		if (!pro) {
			return {
				restated: 'Detected problem (teaser)',
				method: 'Outline of method',
				steps: ['Step 1 only'],
				checks: ['Basic check'],
				pro: false,
				teaserToken: 'UPGRADE_SNAP_PRO'
			};
		}
		return {
			restated: 'Detected problem',
			method: 'Detailed method',
			steps: ['Step 1', 'Step 2', 'Step 3'],
			checks: ['Check 1', 'Check 2'],
			pro: true
		};
	}
}