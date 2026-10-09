import { test, expect } from '@playwright/test';
test('Test page ', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
/* await page.locator('#name').click();
await page.locator('#name').fill('Nivedha');
await page.locator('#email').click();
await page.locator('#email').fill('abc123@gmail.com');
await page.locator('input[placeholder="Enter Phone"]').fill('0123456789');
await page.locator("table").nth(0).locator("tr").filter({ hasText: "Mukesh" }).allTextContents();
console.log(await page.locator("table").nth(0).locator("tr").filter({ hasText: "Mukesh" }).allTextContents());

await page.waitForTimeout(3000);
}); */

await page.locator('#name').fill('abcd');
await page.locator('#email').type("abc123@gmail.com",{delay:200});
await page.keyboard.press("Tab")
await page.locator('#phone').fill('0123456789');
await page.locator('#phone').clear();
await page.keyboard.press('Tab');
await page.waitForTimeout(3000);
await page.keyboard.type('Chennai');
await page.locator('.wikipedia-search-input').fill('apple');
await page.keyboard.press('Enter');
await page.locator("//a[contains(@href, 'pavantestingtools')]").click({button:'right'});
await page.locator('#apple').click({ modifiers: ["Control"] });
await page.getByRole('button',{name:'Point Me'}).hover();
await page.waitForTimeout(3000);
});