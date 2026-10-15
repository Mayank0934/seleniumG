import { LeftNavigationPage } from '../pages/LeftNavigationPage.js';
import { PimPage } from '../pages/PimPage.js';
import { test, expect } from './fixtures/hooks-fixture.js';
import pimdata from './datafiles/pim-module-data.json' with { type: 'json' };

test('[PIM]Verify that a new employee is successfuly created under PIM Module',async({gotoURL,leftNavigationpage,pimPage})=>{

await leftNavigationpage.openPimModule();
await pimPage.addEmployee(pimdata.first_name,pimdata.last_name);
await expect(pimPage.employeeNameHeading).toHaveText(`${pimdata.first_name} ${pimdata.last_name}`);

})
