import {Locator, Page, expect} from "@playwright/test";
import Navigation from './navigation';

export default class InventoryPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly basketItemPrice: Locator;
    readonly priceContainer: Locator;
    readonly pricebar: Locator;
    readonly basketCounter: Locator;

    constructor(page: Page){
        this.page = page;
        this.addButton = page.getByText('Add to cart');
        this.basketItemPrice = page.locator('[class="inventory_item_price"]');
        this.priceContainer = page.locator('[class="pricebar"]');
        this.pricebar = page.locator('[class="pricebar"]');
        this.basketCounter = page.locator('[id="shopping_cart_container"]');
    }

    async visit() {
        await this.page.goto('/inventory.html');
    }

    async addItemsToBasket(index) {
        const specificAddButton = this.addButton.nth(index);
        await expect(specificAddButton).toContainText("Add to cart");
        await specificAddButton.click();
        const navigation = new Navigation(this.page);
        const basketCountAfterAdd = await navigation.getBasketCount();
        expect(basketCountAfterAdd).not.toBeNaN();
    }
}