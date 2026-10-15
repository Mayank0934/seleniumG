import type { Locator, Page } from "@playwright/test";
export class userPage {

    readonly page:Page;
    readonly usermenubutton:Locator;
    readonly logoutbutton:Locator;

    constructor(page:Page) {

        this.page=page;
        this.usermenubutton= page.locator(".oxd-userdropdown-name");
        this.logoutbutton= page.getByRole('menuitem', { name: 'Logout' });
         
    }

    async logout() {
       await this.usermenubutton.click();
       await this.logoutbutton.click();
    }

}