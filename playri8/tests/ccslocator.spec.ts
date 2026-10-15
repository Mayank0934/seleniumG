import{test,expect,Locator} from '@playwright/test'

test("verify css locator", async ({page})=> {

await page.goto("https://demowebshop.tricentis.com/");

// const search:Locator = page.locator('#small-searchterms');
//  await search.click();
 await page.locator('#small-searchterms').fill("T-Shirts");
await page.pause();

})