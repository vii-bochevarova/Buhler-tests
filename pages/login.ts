import { Locator, Page } from "@playwright/test";

export default class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor (page: Page){
        this.page = page;
        this.userName = page.locator('input[id="user-name"]');
        this.password = page.locator('input[id="password"]');
        this.loginButton = page.locator('input[id="login-button"]');
    }

    async visit() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(credentials){
        await this.userName.fill(credentials.userName);
        await this.password.fill(credentials.password);
        await this.loginButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }
}