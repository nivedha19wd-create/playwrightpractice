import { test, expect } from '@playwright/test';
test('Check page title', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(3000);
await expect(page).toHaveTitle('Swag Labs');
await page.waitForTimeout(3000);
await page.getByPlaceholder('Username').click();
await page.getByPlaceholder('Username').fill('standard_user');
await page.waitForTimeout(3000);
await page.getByPlaceholder('Password').click();
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.waitForTimeout(3000);
await page.locator('#login-button').click();
await page.waitForTimeout(5000);
await page.waitForURL('https://www.saucedemo.com/inventory.html');
console.log("URL is Correct");

});