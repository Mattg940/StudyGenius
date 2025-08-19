import { test, expect } from '@playwright/test';

test('landing has title', async ({ page }) => {
	await page.goto('http://localhost:3000');
	await expect(page.getByText('Study Genius')).toBeVisible();
});