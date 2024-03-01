import {Locator, Page} from "@playwright/test";

export default class Navigation {
    readonly page: Page;
    readonly shoppingCart: Locator;
    readonly basketItemPrice: Locator;
    readonly pricebar: Locator;
    readonly priceContainer: Locator;
    readonly basketCounter: Locator;

    constructor(page: Page){
        this.page = page;
        this.shoppingCart = page.locator('[id="shopping_cart_container"]');
        this.basketCounter = page.locator('[id="shopping_cart_container"]');
    }

    async getBasketCount() {
        const text = await this.basketCounter.innerText();
        return parseInt(text, 10);
    }

    async gotoCheckout() {
        await this.shoppingCart.click();
        await this.page.waitForURL('/cart.html');
    }
}