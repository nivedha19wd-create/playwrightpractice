import { test, expect } from '@playwright/test';
test('Test page ', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
/* await page.locator('#name').click();
await page.locator('#name').fill('Nivedha'); */
/* await page.locator('#email').click();
await page.locator('#email').fill('abc123@gmail.com');
await page.locator('input[placeholder="Enter Phone"]').fill('0123456789');
await page.locator("table").nth(0).locator("tr").filter({ hasText: "Mukesh" }).allTextContents();
console.log(await page.locator("table").nth(0).locator("tr").filter({ hasText: "Mukesh" }).allTextContents()); */

/* await page.waitForTimeout(3000);
}); */ 

// actions & typing ,input
/* await page.locator('#name').fill('abcd');
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
}); *

/* //select and dropdown */
/*  await page.locator('#country').selectOption('france');
await page.waitForTimeout(3000);
await page.locator("#country").selectOption({ index: 2 });

await page.getByRole("checkbox", { name: "sunday" }).check(); 
await page.getByRole("checkbox", { name: "sunday" }).uncheck();  */ 
 /* await page.locator('#singleFileInput').setInputFiles('./testfile/Module 1 - Playwright Setup & Basics.pdf');
await page.locator('#draggable') .dragTo(page.locator('#droppable'));
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/'); */
/* await expect(page).toHaveURL('testautomationpractice'); */
/* await expect(page).toHaveTitle('Automation Testing Practice'); */

//assertions
/* await expect(page.locator("#apple")).toBeVisible();
await expect(page.locator("#bat")).not.toBeVisible();
await expect(page.locator(".sidebar section")).toBeHidden();
await expect(page.locator("#Blog1")).toBeAttached();
/*  */
/* await expect(page.locator("h1")).toHaveText("Automation Testing Practice");
await expect(page.locator(".titlewrapper")).toContainText("Automation Testing Practice");
await expect(page.locator("#name")).toHaveValue('Nivedha');
await expect(page.locator('#email')).toHaveClass(/form-control/); */
/* await expect(page.locator("#email")).toHaveCSS("background-color", "rgb(255, 255, 255)");
 await expect(page.locator('#HTML1 table tbody tr')).toHaveCount(7);
 await expect(page.getByRole("button", { name: "start" })).toBeEnabled();
 await expect(page.getByRole("button", { name: "start" })).not.toBeDisabled(); */
/*  await page.getByLabel('Thursday').check();
  await expect(page.getByLabel('Thursday')).toBeChecked();
  await expect(page.getByLabel('Sunday')).not.toBeChecked(); */
  await page.getByPlaceholder('Enter EMail').focus()
  await expect (page.getByPlaceholder('Enter EMail')).toBeFocused();

  //softassertion
  await expect.soft(page.locator("#main")).toBeHidden();
  
});