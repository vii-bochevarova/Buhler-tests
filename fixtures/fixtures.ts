import { test as testBase, Page } from '@playwright/test' 
import CartPage from "../pages/cart";
import InventoryPage from "../pages/inventory";
import LoginPage from "../pages/login";
import Navigation from "../pages/navigation";
import CheckoutPage from '../pages/checkout';

type pageFixtures = {
    page: Page;
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    navigation: Navigation;
    checkout: CheckoutPage;
}

export const test = testBase.extend<pageFixtures>({
    loginPage:async ({page}, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage:async ({page}, use) => {
        await use(new InventoryPage(page));
    },
    cartPage:async ({page}, use) => {
        await use(new CartPage(page));
    },
    navigation:async ({page}, use) => {
        await use(new Navigation(page));
    },
    checkout:async ({page}, use) => {
        await use(new CheckoutPage(page));
    },
})