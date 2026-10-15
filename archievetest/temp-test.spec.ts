
import { expect } from '@playwright/test';
import { test } from '../tests/fixtures/hooks-fixture.js';

// test.beforeEach('Before Each Hook', async ({ loginpage }) => {
// await loginpage.openOrangehrm();
// });

test("Temp test", async ({ page, gotoURL }) => {
// console.log(process.env.BASE_URL);
// console.log(process.env.USER_NAME);
// console.log(process.env.PASSWORD);
// commonUtilsObj.encryptData('admin123');
// const decryptedUserName =commonUtils.decryptData(process.env.USER_NAME!);
// const decryptedPassword =commonUtils.decryptData(process.env.PASSWORD!);
// await loginpage.openOrangehrm();
// console.log(await page.title());
});
//as we have config auth so we dont have to use login again and again,now let us run other tests

test("Temp test2",async({page,gotoURL})=> {

   await expect(page).toHaveTitle("OrangeHRM");
})

test("Temp test3",async({page,gotoURL,logout})=> {
 
   await expect(page).toHaveTitle("OrangeHRM");

})
