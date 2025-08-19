import { AiService } from './ai.service';

describe('AiService tutor guardrails', () => {
	it('never returns a final numeric answer', async () => {
		const ai = new AiService();
		const res = await ai.tutor({ question: 'What is 2+2?' });
		expect(res).toHaveProperty('diagnosis');
		expect(res).toHaveProperty('steps');
		expect(res).toHaveProperty('questions');
		// ensure no "= 4" like response
		const text = JSON.stringify(res).toLowerCase();
		expect(text.includes('= 4')).toBe(false);
		expect(text.includes('answer is 4')).toBe(false);
	});
});