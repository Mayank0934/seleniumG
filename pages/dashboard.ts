 import type { Locator, Page } from '@playwright/test';

 export class DashboardPage {
    
    readonly page:Page;
    readonly dashboardtitletext:Locator;

    constructor(page:Page) {
    this.page=page;
    this.dashboardtitletext= page.getByRole('heading',{name:'Dashboard'});
    }







 }