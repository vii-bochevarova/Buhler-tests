import {test} from '../fixtures/fixtures';

test('Remove cheapest item from basket', async({navigation, cartPage, inventoryPage}) => {
    await inventoryPage.visit();
    await inventoryPage.addItemsToBasket(0);
    await inventoryPage.addItemsToBasket(1);
    await inventoryPage.addItemsToBasket(2);
    await navigation.gotoCheckout();
    await cartPage.removeCheapestItem();
})