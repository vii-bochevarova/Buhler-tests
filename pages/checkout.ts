import {Locator, Page, expect} from "@playwright/test";

export default class CheckoutPage {
    readonly page: Page;
    readonly priceContainer: Locator;
    readonly continueCheckout: Locator;
    readonly submitButton: Locator;
    readonly error: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipcode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.priceContainer = page.locator('[class="item_pricebar"]');
        this.continueCheckout = page.locator('button[id="checkout"]');
        this.submitButton = page.locator('input[id="continue"]');
        this.error = page.locator('[data-test="error"]');
        this.firstName = page.locator('[id="first-name"]');
        this.lastName = page.locator('[id="last-name"]');
        this.zipcode = page.locator('[id="postal-code"]')
        this.continueButton = page.locator('[id="continue"]');
        this.finishButton = page.locator('[id="finish"]');
    }

    async continueToCheckout(){
        await this.continueCheckout.click();
        await this.page.waitForURL('/checkout-step-one.html');
    }

    async checkErrors(){
        await this.submitButton.click();
        await expect(this.error).toBeTruthy();
    }

    async fillData(userData){     
        await this.page.pause()    
        await this.firstName.fill(userData.firstName);
        await this.lastName.fill(userData.lastName);
        await this.zipcode.fill(userData.zipcode);
        await this.continueButton.click();
        await this.page.waitForURL('/checkout-step-two.html')
    }

    async finishCheckout() {
        await this.finishButton.click();
        await this.page.waitForURL('/checkout-complete.html');
    }
}