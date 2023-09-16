import { Yuma } from "./yumaObjects";
import {Driver} from 'selenium-webdriver/chrome';
const yuma = new Yuma() 

test("Add item to Wish List", async () => {
    await yuma.navigate();
    await yuma.search("shorts");
    await yuma.click(yuma.lonoYogaShort);
    await yuma.click(yuma.wishListBtn);
    await yuma.getElement(yuma.errorMsg);
    let errorText = await yuma.getText(yuma.errorMsg);
    expect(errorText).toContain("You must login or register to add items to your wishlist.")
    await yuma.driver.quit();
})