import { expect } from '@playwright/test';
import {test as baseTest} from './common-fixtures.js'




type HooksFixtureType = {
 gotoURL:void;
 logout:void;
}

 export const test = baseTest.extend<HooksFixtureType>({
       gotoURL:async({loginpage},use)=>
        {await loginpage.openOrangehrm();
       await use();
},
  logout: async({userpage},use) =>{
        await use();
        await userpage.logout();
  }
 })
 
 export {expect} from '@playwright/test';