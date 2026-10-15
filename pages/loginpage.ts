import type {Locator,Page} from '@playwright/test';

export class Loginpage{
   
   readonly page:Page;
   readonly usernameInput:Locator;
   readonly usernamePass: Locator;
    readonly loginButton: Locator;
    readonly invalidcrederrorpopup : Locator;

    constructor(page:Page){
             
       this.page = page;
       this.usernameInput = page.getByRole('textbox', { name: 'Username' });
       this.usernamePass = page.getByRole('textbox', { name: 'Password' });
       this.loginButton = page.getByRole('button', {name:'Login'});
       this.invalidcrederrorpopup = page.locator('.oxd-alert-content-text');

    }

    /**
     * to open page
     */
 async  openOrangehrm() {
      
  await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
   }

   /**to login orangehrm
    * 
    */
  async loginOrangeHrm(userName:string, password:string) {
     console.log(await this.page.url());
     await this.page.screenshot({ path: 'debug.png' }); 
    await this.usernameInput.fill(userName);
    await  this.usernamePass.fill(password);
    await  this.loginButton.click();

   }
}