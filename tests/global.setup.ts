//here we will save login info and authentication


import {test} from './fixtures/common-fixtures.js';
import { expect } from '@playwright/test';

test('global setup for auto login',async({page,loginpage,dashboardPage,commonUtils})=>{

    //here we have used the object of commonutils class to decrypt data to send to the website

    // const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    //  const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
//here we have used the loginpage class fixture to open the site, fixture we use so that object na banana pade
   await loginpage.openOrangehrm();

  // await loginpage.loginOrangeHrm(decryptedUserName,decryptedPassword);
await loginpage.loginOrangeHrm('Admin', 'admin123');
    //dekh rhe h dasboard page load hua ya ni/visible hai ya nai

  await  page.waitForURL(process.env.BASE_URL + `/web/index.php/dashboard/index`)

    await expect(dashboardPage.dashboardtitletext).toHaveText('Dashboard');

    await page.context().storageState({
path: './playwright/.auth/auth.json'})
    //now to save for auth- 
  
}) 