import { test as baseTest } from '@playwright/test';
import { Loginpage } from '../../pages/loginpage.js';
import { DashboardPage } from '../../pages/dashboard.js';
import { userPage } from '../../pages/userpage.js';
import { LeftNavigationPage } from '../../pages/LeftNavigationPage.js';
import { PimPage } from '../../pages/PimPage.js';



type PomFixturesType = {
loginpage : Loginpage;
dashboardPage: DashboardPage;
userpage:userPage;
leftNavigationpage:LeftNavigationPage;
pimPage:PimPage;
}

export const test = baseTest.extend<PomFixturesType>({

    loginpage: async({page},use) =>{

await use(new Loginpage(page));
},
dashboardPage: async({page},use) =>{
    
    await use(new DashboardPage(page));
},
  userpage: async({page},use) => {

    await use(new userPage(page));
  },

  leftNavigationpage: async({page},use)=> {

    await use(new LeftNavigationPage(page));
  },

  pimPage: async({page},use)=>{

    await use(new PimPage(page));
  }

    })

