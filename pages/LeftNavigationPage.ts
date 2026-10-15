import type { Locator, Page } from '@playwright/test';

export class LeftNavigationPage {

 readonly page:Page;
readonly pimlink:Locator;

constructor(page:Page) {

    this.page=page;
    this.pimlink= page.getByRole('link', { name: 'PIM' });

}
/**
 * to open pim module
 */
async openPimModule() {

   await this.pimlink.click();

}}