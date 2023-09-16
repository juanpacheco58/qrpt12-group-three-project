import { Yuma } from "./yumaObjects";
import {Driver} from 'selenium-webdriver/chrome';
import { elementLocated } from "selenium-webdriver/lib/until";
const yuma = new Yuma() 

test("Adding items to compare them.", async () => {
    await yuma.navigate();
    await yuma.getElement(yuma.sellersHot);
    await yuma.click(yuma.radiantTee);
    await yuma.click(yuma.addCompareBtn);
    await yuma.click(yuma.gwynTee);
    await yuma.click(yuma.addCompareBtn);
    await yuma.click(yuma.compareProducts);
    await yuma.getResults();
    await yuma.driver.sleep(400)
    await yuma.driver.quit();
});