import {test} from '../fixtures/fixtures';
import { userData } from '../data/userData'

test('Buy Items', async({navigation, inventoryPage, checkout}) => {
    await inventoryPage.visit();   
    await inventoryPage.addItemsToBasket(0);
    await inventoryPage.addItemsToBasket(1);
    await inventoryPage.addItemsToBasket(2);    
    await navigation.gotoCheckout();
    await checkout.continueToCheckout();
    await checkout.fillData(userData);
    await checkout.finishCheckout();
})