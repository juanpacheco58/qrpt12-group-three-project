import { Yuma } from "./yumaObjects";
import {Driver} from 'selenium-webdriver/chrome';
const yuma = new Yuma() 

test("Adding item to cart and proceeding to check out.", async () => {
    await yuma.navigate();
    await yuma.search("Watch");
    await yuma.click(yuma.watch);
    await yuma.click(yuma.addToCart);
    let successText = await yuma.getText(yuma.addedMsg);
    expect(successText).toContain("You added Dash Digital Watch to your");
    await yuma.driver.sleep(2000);
    await yuma.click(yuma.shoppingCart);
    await yuma.click(yuma.viewEditCart);
    await yuma.driver.sleep(2000);
    await yuma.getResults();
    await yuma.driver.sleep(2000);
    await yuma.click(yuma.checkOut);
    await yuma.getElement(yuma.ship);
    await yuma.driver.sleep(3000);
    await yuma.click(yuma.emailField);
    await yuma.sendKeys(yuma.emailField,"emailTester@gmail.com");
    await yuma.click(yuma.firstName);
    await yuma.sendKeys(yuma.firstName,"Nick");
    await yuma.click(yuma.lastName);
    await yuma.sendKeys(yuma.lastName,"Mullen");
    await yuma.click(yuma.streetAddress);
    await yuma.sendKeys(yuma.streetAddress, "1234 Hollywood Hills");
    await yuma.click(yuma.city);
    await yuma.sendKeys(yuma.city,"Los Angeles");
    await yuma.click(yuma.state);
    await yuma.click(yuma.cali);
    await yuma.click(yuma.zipCode);
    await yuma.sendKeys(yuma.zipCode, 12345);
    await yuma.click(yuma.phoneNumber);
    await yuma.sendKeys(yuma.phoneNumber, 123456789);
    await yuma.driver.sleep(2000);
    await yuma.click(yuma.shippingMethod);
    await yuma.click(yuma.next);
    await yuma.driver.sleep(2000);
    await yuma.driver.quit();

});