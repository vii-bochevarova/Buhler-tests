import {Browser, chromium, Page} from "@playwright/test";
import LoginPage from "./pages/login";
import { credentials } from "./data/credentials";

async function globalSetup() {
    const browser: Browser = await chromium.launch()
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.visit();
    await loginPage.login(credentials);
    await page.context().storageState({path: "./LoginAuth.json"});
    await browser.close();
}

export default globalSetup;