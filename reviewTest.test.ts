import { Yuma } from "./yumaObjects";
import {Driver} from 'selenium-webdriver/chrome';
const yuma = new Yuma() 

test('Write a Review', async () => {
    await yuma.navigate();
    await yuma.click(yuma.radiantTee);
    await yuma.click(yuma.addReviewBtn);
    await yuma.click(yuma.rating);
    await yuma.sendKeys(yuma.nameInput,"Customer 101");
    await yuma.sendKeys(yuma.summaryInput,"Not Woth The Price");
    await yuma.sendKeys(yuma.reviewInput,"Really good quality but not worth the price.");
    await yuma.click(yuma.submitBtn);
    await yuma.driver.sleep(1000);
    await yuma.driver.quit();
});