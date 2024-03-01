import {test} from '../fixtures/fixtures';

test('Error', async({navigation, inventoryPage, checkout}) => {
    await inventoryPage.visit();
    await navigation.gotoCheckout();
    await checkout.continueToCheckout();
    await checkout.checkErrors();
})