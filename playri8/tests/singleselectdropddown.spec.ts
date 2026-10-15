import {test,expect,Locator} from '@playwright/test'

test("Single select dropdown", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');

await page.locator('#country').click();

await page.waitForTimeout(5000);


})