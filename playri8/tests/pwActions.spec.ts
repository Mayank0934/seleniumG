import {test,expect,Locator} from '@playwright/test'

test("input Action", async ({page}) => {

page.goto("https://testautomationpractice.blogspot.com/");

const Textbox:Locator = await page.locator('#name');

await Textbox.fill("username");

});