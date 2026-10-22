1.///Page load and browser validation///

import { test, expect } from '@playwright/test';
test('Page load and browser validation', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
     await expect(page.getByPlaceholder('Enter Name')).toBeVisible()
});


2.///Form input automation///
test('Form input automation', async ({ page }) => {
    
    await page.getByPlaceholder('Enter Name').fill('abc');
    await page.getByPlaceholder('Enter EMail').fill('abc123@gmail.com');
    await page.getByPlaceholder('Enter Phone').fill('0123456789');
    await page.getByLabel('Address:').fill('no.123,abcd');
     await expect(page.locator('#name')).toHaveValue('abc');
});

3.///Radio buttons and checkboxes///
test('Radio buttons and checkboxes', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('radio', { name: 'Female', exact: true }).check();
    await page.getByLabel('Monday').check();
     await page.getByLabel('Tuesday').check();
     await expect(page.getByRole('radio', { name: 'Female', exact: true })).toBeChecked();
  await expect(page.getByLabel('Monday')).toBeChecked();
  await expect(page.getByLabel('Tuesday')).toBeChecked();

});

4.///Dropdown and multi-select elements//
test('Dropdown and multi-select elements', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByLabel('Country:').selectOption(['canada','Germany']);
     await expect(page.getByLabel('Country:')).toHaveValue('canada');
});

5.//Date picker handling//
test('Date picker handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByPlaceholder('Start Date').fill('2026-10-22');
    await page.getByPlaceholder('End Date').fill('2026-10-23');
     await expect(page.getByPlaceholder('Start Date')).toHaveValue('2026-10-22');
  await expect(page.getByPlaceholder('End Date')).toHaveValue('2026-10-23');
});

6.///Button interactions///
test('Button interactions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('.wikipedia-search-input').fill('apple');
await page.keyboard.press('Enter');
await page.locator("//a[contains(@href, 'pavantestingtools')]").click({button:'right'});
await page.locator('#apple').click({ modifiers: ["Control"] });
    await page.getByRole('button',{name:'Point Me'}).hover();
});

7.///Alerts and popups///
test('Alerts and popups', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    let alertMessage = '';
  page.on('dialog', async dialog => {
    alertMessage = dialog.message();
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  expect(alertMessage).toBe('I am an alert box!');

});
test('Alerts confirm', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {
    await dialog.dismiss(); 
  });
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
  await page.waitForTimeout(2000);
});
test('Alerts prompt', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {
    await dialog.dismiss(); 
  });
await page.getByRole('button', { name: 'Prompt Alert' }).click();
  await expect(page.locator('#demo')).toHaveText(`User cancelled the prompt.`);
});

8.//New tab and popup window handling//
test('New tab and popup window handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const newTabpage = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const newTab = await newTabpage;
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://www.pavantestingtools.com/');
});
test(' popup window', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
  const popuppage = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Popup Windows' }).click();
  const popup = await popuppage;
  await expect(popup).toHaveURL(/selenium\.dev/);
  await popup.waitForLoadState();
});

9.///Keyboard and mouse actions//
test('Keyboard and mouse actions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#email').type("abc123@gmail.com",{delay:200});
await page.keyboard.press("Tab")
await page.locator('#phone').fill('0123456789');
await page.locator('#phone').clear();
await page.keyboard.press('Tab');
await page.keyboard.type('Chennai');
await page.locator('.wikipedia-search-input').fill('apple');
await page.keyboard.press('Enter');
await page.locator("//a[contains(@href, 'pavantestingtools')]").click({button:'right'});
});

10.//Locator strategies//
test('Locator strategies', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
     page.locator("xpath=//div[contains(@class, 'form-group')]//input[@id='phone']");
      page.locator('h1[contains(text(),"Automation")]');
     await page.locator('#name').click()
      await page.locator('input[placeholder="Enter Phone"]').fill('0123456789');
});

11.///Assertions and debugging///
test('Assertions and debugging', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.locator("#apple")).toBeVisible();
await expect(page.locator("#bat")).not.toBeVisible();
await expect(page.locator(".sidebar section")).toBeHidden();
await expect(page.locator("#Blog1")).toBeAttached();
await expect(page.locator("#email")).toHaveCSS("background-color", "rgb(255, 255, 255)");
 await expect(page.locator('#HTML1 table tbody tr')).toHaveCount(7);
 await expect(page.getByRole("button", { name: "start" })).toBeEnabled();
 await expect(page.getByRole("button", { name: "start" })).not.toBeDisabled(); 
await page.getByLabel('Thursday').check();
  await expect(page.getByLabel('Thursday')).toBeChecked();
  await expect(page.getByLabel('Sunday')).not.toBeChecked(); 
  await page.getByPlaceholder('Enter EMail').focus()
  await expect (page.getByPlaceholder('Enter EMail')).toBeFocused();
});
  test('soft Assertions ', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
await expect.soft (page.getByPlaceholder('Enter EMaill')).toBeFocused();
  await expect.soft(page.getByRole("button", { name: "start" })).toBeEnabled();
});
test('waits', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
await page.waitForURL(/testautomationpractice/); 
    await page.waitForSelector('button[name="start"]', { state: 'visible' });
   await page.getByRole('link', { name: ' Udemy Courses' }).click();
   await page.waitForLoadState("load");
   await page.waitForTimeout(2000);
});
   test('waitss', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(async () => { const count = await page.locator("tr").count();
  expect(count).toBeGreaterThan(2);}).toPass({ timeout: 10_000 });
    });

 test.only('Take a screenshot', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({
        path: 'screenshot.png',
        fullPage: true
    });

});


