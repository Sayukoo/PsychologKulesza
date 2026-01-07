import { test, expect } from '@playwright/test';

test('verify process section update', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Handle Cookie Banner if present
  const acceptButton = page.getByRole('button', { name: 'Akceptuję' });
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
    await expect(acceptButton).not.toBeVisible();
  }

  // Locate the Process section
  const processSection = page.locator('#process');

  // Scroll to it
  await processSection.scrollIntoViewIfNeeded();

  // Wait for animation (explicit wait as per memory)
  await page.waitForTimeout(2000);

  // Take a screenshot of the current state
  const header = processSection.getByRole('heading', { level: 2 });
  await expect(header).toContainText('Jedno 60-minutowe spotkanie');

  const step1 = processSection.getByText('Zbieramy fakty');
  await expect(step1).toBeVisible();

  const step2 = processSection.getByText('Analizujemy opcje');
  await expect(step2).toBeVisible();

  const step3 = processSection.getByText('Dochodzimy do wniosku');
  await expect(step3).toBeVisible();

  const disclaimer = processSection.getByText('To nie jest psychoterapia');
  await expect(disclaimer).toBeVisible();

  await page.screenshot({ path: 'verification/process_section.png', fullPage: false });
});
