import {Locator, Page, expect} from "@playwright/test";

export default class CartPage {
    readonly page: Page;
    readonly shoppingCart: Locator;
    readonly basketItemPrice: Locator;
    readonly priceContainer: Locator;
    readonly basketRemoveButton: Locator;
    readonly basketCards: Locator;

    constructor(page: Page){
        this.page = page;
        this.basketCards = page.locator('[class="cart_item"]');
        this.shoppingCart = page.locator('[id="shopping_cart_container"]');
        this.basketItemPrice = page.locator('[class="inventory_item_price"]');
        this.priceContainer = page.locator('[class="item_pricebar"]');
        this.basketRemoveButton = page.getByRole('button', {name: 'Remove'});
    }

    async gotoCheckout() {
        await this.page.waitForURL('/cart.html');
    }

    async removeCheapestItem() {
        const itimesBeforeRemoval = await this.basketCards.count()
        const allPriceTexts = await this.basketItemPrice.allInnerTexts();
        const justNumber = allPriceTexts.map((element) => {
            const noCurrency = element.replace("$", "");
            return parseInt(noCurrency, 10);
        })
        const cheapestItem = Math.min(...justNumber);
        const cheapestItemIdx = justNumber.indexOf(cheapestItem);
        const specificItem = this.basketRemoveButton.nth(cheapestItemIdx);  
        await specificItem.click();
        await expect(this.basketCards).toHaveCount(itimesBeforeRemoval - 1);
    }
}