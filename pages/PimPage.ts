import type { Locator,Page } from "@playwright/test";

export class PimPage {

readonly page:Page;
readonly addPimButton:Locator;
readonly firstName:Locator;
readonly lastName:Locator;
readonly employeeID: Locator;
readonly save:Locator;
readonly employeeNameHeading: Locator;
//readonly cancel:Locator;

constructor(page:Page) {

     this.page=page;
    this.addPimButton = page.getByRole('button', { name: ' Add' });
    this.firstName = page.getByRole('textbox', { name: 'First Name' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name' });
    this.employeeID = page.getByText('Employee Id');
    this.save = page.getByRole('button', { name: 'Save' });
   this.employeeNameHeading=page.locator('.orangehrm-edit-employee-name');
}
/**
 * to add a new employee
 * @param firstName 
 * @param lastName 
 */

async addEmployee(firstName:string,lastName:string) {

     await this.addPimButton.click();
     await this.firstName.fill(firstName);
     await this.lastName.fill(lastName);
     await this.save.click();

}
}


